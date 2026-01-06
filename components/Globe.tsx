import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Memory } from '../types';
import { GeoPermissibleObjects } from 'd3';
import { formatDateRange } from '../utils/dateUtils';

interface GlobeProps {
  memories: Memory[];
  onMemoryClick: (memory: Memory) => void;
  selectedMemory?: Memory | null;
}

const Globe: React.FC<GlobeProps> = ({ memories, onMemoryClick, selectedMemory }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const [landData, setLandData] = useState<any>(null);
  const [zoom, setZoom] = useState(1);
  const [hoveredMemory, setHoveredMemory] = useState<Memory | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then((res) => res.json())
      .then((data) => setLandData(data))
      .catch(err => console.error("Failed to load globe data", err));
  }, []);

  useEffect(() => {
    if (selectedMemory) {
      const targetRotation: [number, number, number] = [-selectedMemory.lng, -selectedMemory.lat, 0];
      const startRotation = [...rotation] as [number, number, number];
      const interpolator = d3.interpolate(startRotation, targetRotation);
      
      let start: number | null = null;
      const duration = 1200;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const current = interpolator(d3.easeCubicOut(progress));
        setRotation(current);
        if (progress < 1) requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    }
  }, [selectedMemory]);

  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseScale = Math.min(dimensions.width, dimensions.height) / 2.6;
  const currentScale = baseScale * zoom;

  const handleWheel = (e: React.WheelEvent) => {
    const newZoom = zoom * Math.exp(-e.deltaY * 0.001);
    setZoom(Math.max(0.6, Math.min(6, newZoom)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && lastPos.current) {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const sensitivity = 0.25 / Math.sqrt(zoom);
      setRotation((prev) => [
        prev[0] + dx * sensitivity,
        Math.max(-90, Math.min(90, prev[1] - dy * sensitivity)),
        prev[2]
      ]);
      lastPos.current = { x: e.clientX, y: e.clientY };
    } else {
        const projection = d3.geoOrthographic()
            .scale(currentScale)
            .translate([dimensions.width / 2, dimensions.height / 2])
            .rotate(rotation);

        const center = projection.invert([dimensions.width / 2, dimensions.height / 2]);
        let found: Memory | null = null;
        let minDist = 15;

        for (const mem of memories) {
            const coords: [number, number] = [mem.lng, mem.lat];
            if (center && d3.geoDistance(coords, center) > 1.57) continue;
            const pos = projection(coords);
            if (pos) {
                const dist = Math.hypot(pos[0] - e.clientX, pos[1] - e.clientY);
                if (dist < minDist) {
                    minDist = dist;
                    found = mem;
                }
            }
        }

        if (found) {
            setHoveredMemory(found);
            const pos = projection([found.lng, found.lat]);
            if (pos) setTooltipPos({ x: pos[0], y: pos[1] });
        } else {
            setHoveredMemory(null);
            setTooltipPos(null);
        }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    lastPos.current = null;
    if (hoveredMemory) onMemoryClick(hoveredMemory);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !landData) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const projection = d3.geoOrthographic()
      .scale(currentScale)
      .translate([dimensions.width / 2, dimensions.height / 2])
      .rotate(rotation);

    const pathGenerator = d3.geoPath().projection(projection).context(ctx);
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Glow / Atmosphere
    const atmosphereGradient = ctx.createRadialGradient(
      dimensions.width / 2, dimensions.height / 2, currentScale * 0.95,
      dimensions.width / 2, dimensions.height / 2, currentScale * 1.2
    );
    atmosphereGradient.addColorStop(0, 'rgba(30, 41, 59, 0.4)');
    atmosphereGradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.2)');
    atmosphereGradient.addColorStop(1, 'rgba(2, 6, 23, 0)');
    ctx.fillStyle = atmosphereGradient;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    // Deep Sphere
    ctx.beginPath();
    pathGenerator({ type: 'Sphere' });
    ctx.fillStyle = '#050a1a'; 
    ctx.fill();
    
    // Graticules (Lat/Lng lines)
    ctx.beginPath();
    pathGenerator(d3.geoGraticule()());
    ctx.strokeStyle = 'rgba(71, 85, 105, 0.1)';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Land
    ctx.beginPath();
    pathGenerator(landData);
    ctx.fillStyle = '#111827'; 
    ctx.fill();
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 0.4;
    ctx.stroke();

    // Memory Lights
    memories.forEach(mem => {
        const coords: [number, number] = [mem.lng, mem.lat];
        const center = projection.invert([dimensions.width / 2, dimensions.height / 2]);
        if (center && d3.geoDistance(coords, center) > 1.57) return;

        const geoPoint: GeoPermissibleObjects = { type: 'Point', coordinates: coords };
        const isSelected = selectedMemory?.id === mem.id;
        const isHovered = hoveredMemory?.id === mem.id;

        // Outer Glow
        ctx.beginPath();
        pathGenerator.pointRadius(Math.max(3, (isSelected || isHovered ? 14 : 7) * (zoom * 0.4 + 0.6))); 
        pathGenerator(geoPoint);
        ctx.fillStyle = (isSelected || isHovered) ? 'rgba(251, 191, 36, 0.25)' : 'rgba(251, 191, 36, 0.08)'; 
        ctx.fill();

        // Core Light
        ctx.beginPath();
        pathGenerator.pointRadius(Math.max(1.5, (isSelected || isHovered ? 4 : 2) * (zoom * 0.4 + 0.6)));
        pathGenerator(geoPoint);
        ctx.fillStyle = (isSelected || isHovered) ? '#fbbf24' : 'rgba(251, 191, 36, 0.7)'; 
        ctx.fill();
    });
  }, [dimensions, landData, rotation, memories, currentScale, zoom, selectedMemory, hoveredMemory]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => { setIsDragging(false); setHoveredMemory(null); }}
      onWheel={handleWheel}
      style={{ cursor: isDragging ? 'grabbing' : (hoveredMemory ? 'pointer' : 'grab') }}
    >
      <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} className="block" />
      {hoveredMemory && tooltipPos && (
        <div 
            className="absolute z-50 pointer-events-none flex flex-col items-center justify-center px-4 py-2 rounded border border-slate-700/30 bg-slate-900/80 backdrop-blur-lg shadow-2xl text-center animate-in fade-in zoom-in duration-200"
            style={{ left: tooltipPos.x, top: tooltipPos.y, transform: 'translate(-50%, -140%)' }}
        >
            <span className="text-amber-50 font-serif text-lg tracking-wide whitespace-nowrap">{hoveredMemory.locationName}</span>
            <span className="text-slate-500 text-[10px] font-mono mt-0.5 uppercase tracking-tighter">{formatDateRange(hoveredMemory.timestamp, hoveredMemory.endDate)}</span>
        </div>
      )}
    </div>
  );
};

export default Globe;