import { Memory } from "../types";

export const INITIAL_MEMORIES: Memory[] = [
  // 2016
  { id: "2016-1", locationName: "Chicago", lat: 41.8781, lng: -87.6298, reflection: "First trip for our kid outside California.", timestamp: new Date("2016-09-20").getTime(), endDate: new Date("2016-09-25").getTime() },
  { id: "2016-2", locationName: "Los Angeles", lat: 34.0522, lng: -118.2437, reflection: "Road trip with my mom.", timestamp: new Date("2016-11-21").getTime(), endDate: new Date("2016-11-24").getTime() },
  
  // 2017
  { id: "2017-1", locationName: "Barcelona", lat: 41.3851, lng: 2.1734, reflection: "First international trip for KK.", timestamp: new Date("2017-05-23").getTime(), endDate: new Date("2017-05-28").getTime() },
  { id: "2017-2", locationName: "Madrid", lat: 40.4168, lng: -3.7038, reflection: "Exploring the capital.", timestamp: new Date("2017-05-29").getTime(), endDate: new Date("2017-06-05").getTime() },
  { id: "2017-3", locationName: "Ibiza", lat: 38.9067, lng: 1.4206, reflection: "Island calm.", timestamp: new Date("2017-06-06").getTime(), endDate: new Date("2017-06-12").getTime() },

  // 2018
  { id: "2018-1", locationName: "Pacific Grove", lat: 36.6177, lng: -121.9166, reflection: "Coastal getaway.", timestamp: new Date("2018-03-16").getTime(), endDate: new Date("2018-03-17").getTime() },
  { id: "2018-2", locationName: "Honolulu", lat: 21.3069, lng: -157.8583, reflection: "Trip with Yeye and Nainai.", timestamp: new Date("2018-12-18").getTime(), endDate: new Date("2018-12-24").getTime() },

  // 2019
  { id: "2019-1", locationName: "Yosemite", lat: 37.8651, lng: -119.5383, reflection: "Winter in the valley with family.", timestamp: new Date("2019-02-01").getTime(), endDate: new Date("2019-02-02").getTime() },
  { id: "2019-2", locationName: "Tokyo", lat: 35.6762, lng: 139.6503, reflection: "First international flight for Kiki; met my parents.", timestamp: new Date("2019-07-06").getTime(), endDate: new Date("2019-07-14").getTime() },
  { id: "2019-3", locationName: "Carlsbad", lat: 33.1581, lng: -117.3506, reflection: "Family theme park trip.", timestamp: new Date("2019-08-29").getTime(), endDate: new Date("2019-09-01").getTime() },
  { id: "2019-4", locationName: "Foshan", lat: 23.0215, lng: 113.1214, reflection: "Trip with KK.", timestamp: new Date("2019-11-28").getTime(), endDate: new Date("2019-11-30").getTime() },
  { id: "2019-5", locationName: "Seattle", lat: 47.6062, lng: -122.3321, reflection: "Pacific Northwest road trip.", timestamp: new Date("2019-12-21").getTime(), endDate: new Date("2020-01-02").getTime() },

  // 2021
  { id: "2021-1", locationName: "Tahoe", lat: 38.9399, lng: -119.9772, reflection: "Weekend ski trips.", timestamp: new Date("2021-01-01").getTime(), endDate: new Date("2021-01-28").getTime() },
  { id: "2021-2", locationName: "Tahoe", lat: 38.93, lng: -119.97, reflection: "Ski trips continued.", timestamp: new Date("2021-02-01").getTime(), endDate: new Date("2021-02-28").getTime() },
  { id: "2021-3", locationName: "Maui", lat: 20.7984, lng: -156.3319, reflection: "Hawaii trip.", timestamp: new Date("2021-03-26").getTime(), endDate: new Date("2021-04-01").getTime() },
  { id: "2021-4", locationName: "Las Vegas", lat: 36.1699, lng: -115.1398, reflection: "Campervan pickup road trip.", timestamp: new Date("2021-04-22").getTime(), endDate: new Date("2021-04-25").getTime() },
  { id: "2021-5", locationName: "Big Sur", lat: 36.2704, lng: -121.8081, reflection: "Camping trip.", timestamp: new Date("2021-05-28").getTime(), endDate: new Date("2021-05-31").getTime() },
  { id: "2021-6", locationName: "Russian River", lat: 38.4932, lng: -123.0033, reflection: "Camping.", timestamp: new Date("2021-06-11").getTime(), endDate: new Date("2021-06-13").getTime() },
  { id: "2021-7", locationName: "Boston", lat: 42.3601, lng: -71.0589, reflection: "East Coast trip.", timestamp: new Date("2021-06-25").getTime(), endDate: new Date("2021-06-30").getTime() },
  { id: "2021-8", locationName: "Provincetown", lat: 42.0584, lng: -70.1787, reflection: "Coastal Massachusetts.", timestamp: new Date("2021-07-01").getTime(), endDate: new Date("2021-07-03").getTime() },
  { id: "2021-9", locationName: "Russian River", lat: 38.4932, lng: -123.0033, reflection: "Camping and kayaking.", timestamp: new Date("2021-08-13").getTime(), endDate: new Date("2021-08-15").getTime() },
  { id: "2021-10", locationName: "Carlsbad", lat: 33.1581, lng: -117.3506, reflection: "Caius birthday trip.", timestamp: new Date("2021-08-27").getTime(), endDate: new Date("2021-08-31").getTime() },
  { id: "2021-11", locationName: "Yosemite", lat: 37.8651, lng: -119.5383, reflection: "Family trip.", timestamp: new Date("2021-09-04").getTime(), endDate: new Date("2021-09-06").getTime() },
  { id: "2021-12", locationName: "Maui", lat: 20.7984, lng: -156.3319, reflection: "Hawaii trip.", timestamp: new Date("2021-11-13").getTime(), endDate: new Date("2021-11-22").getTime() },
  { id: "2021-13", locationName: "Tahoe", lat: 38.9399, lng: -119.9772, reflection: "Started winter weekends and holidays.", timestamp: new Date("2021-12-01").getTime(), endDate: new Date("2021-12-28").getTime() },

  // 2022
  { id: "2022-1", locationName: "Tahoe", lat: 38.9399, lng: -119.9772, reflection: "Weekend ski trips.", timestamp: new Date("2022-01-01").getTime(), endDate: new Date("2022-01-28").getTime() },
  { id: "2022-2", locationName: "Bodega Bay", lat: 38.3333, lng: -123.0481, reflection: "Coastal trip.", timestamp: new Date("2022-03-30").getTime(), endDate: new Date("2022-04-03").getTime() },
  { id: "2022-3", locationName: "Napa Valley", lat: 38.5025, lng: -122.2654, reflection: "Campervan trip.", timestamp: new Date("2022-04-30").getTime(), endDate: new Date("2022-05-01").getTime() },
  { id: "2022-4", locationName: "Carlsbad", lat: 33.1581, lng: -117.3506, reflection: "Extended family trip.", timestamp: new Date("2022-05-07").getTime(), endDate: new Date("2022-05-31").getTime() },
  { id: "2022-5", locationName: "Tahoe", lat: 38.9399, lng: -119.9772, reflection: "Camping at Camp Richardson.", timestamp: new Date("2022-07-02").getTime(), endDate: new Date("2022-07-04").getTime() },
  { id: "2022-6", locationName: "Malibu", lat: 34.0259, lng: -118.7798, reflection: "Theme park and camping.", timestamp: new Date("2022-07-21").getTime(), endDate: new Date("2022-07-24").getTime() },
  { id: "2022-7", locationName: "Toronto", lat: 43.6511, lng: -79.3470, reflection: "International city trip.", timestamp: new Date("2022-09-29").getTime(), endDate: new Date("2022-09-30").getTime() },
  { id: "2022-8", locationName: "Niagara Falls", lat: 43.0896, lng: -79.0849, reflection: "Witnessing the falls.", timestamp: new Date("2022-10-01").getTime(), endDate: new Date("2022-10-03").getTime() },
  { id: "2022-9", locationName: "Bora Bora", lat: -16.5004, lng: -151.7415, reflection: "Anniversary special trip.", timestamp: new Date("2022-11-18").getTime(), endDate: new Date("2022-11-28").getTime() },
  { id: "2022-10", locationName: "Tahoe", lat: 39.1970, lng: -120.2357, reflection: "Joined ski team at Palisades.", timestamp: new Date("2022-12-01").getTime(), endDate: new Date("2022-12-28").getTime() },

  // 2023
  { id: "2023-1", locationName: "Tahoe", lat: 39.1970, lng: -120.2357, reflection: "Ski season.", timestamp: new Date("2023-01-01").getTime(), endDate: new Date("2023-03-31").getTime() },
  { id: "2023-2", locationName: "Milan", lat: 45.4642, lng: 9.1900, reflection: "Italy family trip begin.", timestamp: new Date("2023-04-06").getTime(), endDate: new Date("2023-04-08").getTime() },
  { id: "2023-3", locationName: "Florence", lat: 43.7696, lng: 11.2558, reflection: "Art and history.", timestamp: new Date("2023-04-09").getTime(), endDate: new Date("2023-04-11").getTime() },
  { id: "2023-4", locationName: "Porto Venere", lat: 44.0501, lng: 9.8367, reflection: "Coastal Italy.", timestamp: new Date("2023-04-12").getTime(), endDate: new Date("2023-04-17").getTime() },
  { id: "2023-5", locationName: "Russian River", lat: 38.4932, lng: -123.0033, reflection: "Memorial Day family camping.", timestamp: new Date("2023-05-01").getTime(), endDate: new Date("2023-05-31").getTime() },
  { id: "2023-6", locationName: "Panama City", lat: 8.9824, lng: -79.5199, reflection: "Remote work travel begin.", timestamp: new Date("2023-06-09").getTime(), endDate: new Date("2023-06-11").getTime() },
  { id: "2023-7", locationName: "Medellin", lat: 6.2442, lng: -75.5812, reflection: "Colombia adventures.", timestamp: new Date("2023-06-12").getTime(), endDate: new Date("2023-06-19").getTime() },
  { id: "2023-8", locationName: "Cartagena", lat: 10.3910, lng: -75.4794, reflection: "Caribbean coast.", timestamp: new Date("2023-06-20").getTime(), endDate: new Date("2023-07-03").getTime() },
  { id: "2023-9", locationName: "Glen Ellen", lat: 38.3641, lng: -122.5222, reflection: "Birthday trip; hot air balloon.", timestamp: new Date("2023-07-14").getTime(), endDate: new Date("2023-07-16").getTime() },
  { id: "2023-10", locationName: "Hong Kong", lat: 22.3193, lng: 114.1694, reflection: "Family trip.", timestamp: new Date("2023-08-03").getTime(), endDate: new Date("2023-08-09").getTime() },
  { id: "2023-11", locationName: "Macau", lat: 22.1987, lng: 113.5439, reflection: "Kids enjoyed the lights.", timestamp: new Date("2023-08-10").getTime(), endDate: new Date("2023-08-12").getTime() },
  { id: "2023-12", locationName: "San Francisco", lat: 37.7749, lng: -122.4194, reflection: "Road trip from Vegas.", timestamp: new Date("2023-09-15").getTime(), endDate: new Date("2023-09-16").getTime() },
  { id: "2023-13", locationName: "Yosemite", lat: 37.8651, lng: -119.5383, reflection: "Family trip and bouldering.", timestamp: new Date("2023-10-05").getTime(), endDate: new Date("2023-10-08").getTime() },
  { id: "2023-14", locationName: "Tulum", lat: 20.2114, lng: -87.4654, reflection: "Solo trip; first time without kids.", timestamp: new Date("2023-11-17").getTime(), endDate: new Date("2023-11-23").getTime() },
  { id: "2023-15", locationName: "Merced", lat: 37.3022, lng: -120.4830, reflection: "Visited Betty.", timestamp: new Date("2023-11-25").getTime(), endDate: new Date("2023-11-25").getTime() },
  { id: "2023-16", locationName: "Tahoe", lat: 39.1970, lng: -120.2357, reflection: "Second year ski team.", timestamp: new Date("2023-12-01").getTime(), endDate: new Date("2023-12-28").getTime() },

  // 2024
  { id: "2024-1", locationName: "Tahoe", lat: 39.1970, lng: -120.2357, reflection: "Weekend ski trips.", timestamp: new Date("2024-01-01").getTime(), endDate: new Date("2024-01-28").getTime() },
  { id: "2024-2", locationName: "Austin", lat: 30.2672, lng: -97.7431, reflection: "MA Business Conference.", timestamp: new Date("2024-03-01").getTime(), endDate: new Date("2024-03-28").getTime() },
  { id: "2024-3", locationName: "Moab", lat: 38.5733, lng: -109.5498, reflection: "Utah Road trip.", timestamp: new Date("2024-04-09").getTime(), endDate: new Date("2024-04-14").getTime() },
  { id: "2024-4", locationName: "Burbank", lat: 34.1808, lng: -118.3089, reflection: "Short trip.", timestamp: new Date("2024-05-12").getTime(), endDate: new Date("2024-05-14").getTime() },
  { id: "2024-5", locationName: "Universal Studios", lat: 34.1381, lng: -118.3534, reflection: "Kiki birthday trip.", timestamp: new Date("2024-05-01").getTime(), endDate: new Date("2024-05-28").getTime() },
  { id: "2024-6", locationName: "Prado Regional Park", lat: 33.9400, lng: -117.6500, reflection: "Memorial Day car camping.", timestamp: new Date("2024-05-24").getTime(), endDate: new Date("2024-05-27").getTime() },
  { id: "2024-7", locationName: "Stinson Beach", lat: 37.9005, lng: -122.6447, reflection: "Dipsea trail hiking.", timestamp: new Date("2024-06-01").getTime(), endDate: new Date("2024-06-28").getTime() },
  { id: "2024-8", locationName: "Osaka", lat: 34.6937, lng: 135.5023, reflection: "Japan trip start.", timestamp: new Date("2024-07-12").getTime(), endDate: new Date("2024-07-14").getTime() },
  { id: "2024-9", locationName: "Kyoto", lat: 35.0116, lng: 135.7681, reflection: "Ancient capital.", timestamp: new Date("2024-07-15").getTime(), endDate: new Date("2024-07-19").getTime() },
  { id: "2024-10", locationName: "Beijing", lat: 39.9042, lng: 116.4074, reflection: "Met kids in China.", timestamp: new Date("2024-07-20").getTime(), endDate: new Date("2024-07-25").getTime() },
  { id: "2024-11", locationName: "Foshan", lat: 23.0215, lng: 113.1214, reflection: "Family time.", timestamp: new Date("2024-08-03").getTime(), endDate: new Date("2024-08-11").getTime() },
  { id: "2024-12", locationName: "Russian River", lat: 38.4932, lng: -123.0033, reflection: "Camping and climbing.", timestamp: new Date("2024-08-30").getTime(), endDate: new Date("2024-09-02").getTime() },
  { id: "2024-13", locationName: "Bishop", lat: 37.3614, lng: -118.3996, reflection: "Fall trip.", timestamp: new Date("2024-10-13").getTime(), endDate: new Date("2024-10-14").getTime() },
  { id: "2024-14", locationName: "Guadalajara", lat: 20.6597, lng: -103.3496, reflection: "Cultural trip and lakeside hot springs.", timestamp: new Date("2024-11-16").getTime(), endDate: new Date("2024-11-28").getTime() },

  // 2025
  { id: "2025-1", locationName: "Bryce Canyon", lat: 37.5930, lng: -112.1871, reflection: "Utah road trip.", timestamp: new Date("2025-04-05").getTime(), endDate: new Date("2025-04-07").getTime() },
  { id: "2025-2", locationName: "Zion National Park", lat: 37.2982, lng: -113.0263, reflection: "National park visit.", timestamp: new Date("2025-04-08").getTime(), endDate: new Date("2025-04-08").getTime() },
  { id: "2025-3", locationName: "Las Vegas", lat: 36.1699, lng: -115.1398, reflection: "Short city stop.", timestamp: new Date("2025-04-11").getTime(), endDate: new Date("2025-04-11").getTime() },
  { id: "2025-4", locationName: "Sonoma Raceway", lat: 38.1613, lng: -122.4566, reflection: "Motorsport event.", timestamp: new Date("2025-04-26").getTime(), endDate: new Date("2025-04-26").getTime() },
  { id: "2025-5", locationName: "La Paz", lat: 24.1426, lng: -110.3128, reflection: "Couple trip.", timestamp: new Date("2025-07-16").getTime(), endDate: new Date("2025-07-21").getTime() },
  { id: "2025-6", locationName: "Foshan", lat: 23.0215, lng: 113.1214, reflection: "Family visit.", timestamp: new Date("2025-08-01").getTime(), endDate: new Date("2025-08-09").getTime() },
  { id: "2025-7", locationName: "Changchun", lat: 43.8171, lng: 125.3235, reflection: "Visiting family in the north.", timestamp: new Date("2025-08-01").getTime(), endDate: new Date("2025-08-10").getTime() },
  { id: "2025-8", locationName: "Chang Bai Mountain", lat: 42.0089, lng: 128.0635, reflection: "8/12-8/14 bike in forest, 8/15 rafting, 8/16 village stay.", timestamp: new Date("2025-08-11").getTime(), endDate: new Date("2025-08-16").getTime() },
  { id: "2025-9", locationName: "Foshan", lat: 23.0215, lng: 113.1214, reflection: "Return stop.", timestamp: new Date("2025-08-18").getTime(), endDate: new Date("2025-08-19").getTime() },
  { id: "2025-10", locationName: "San José del Cabo", lat: 23.0608, lng: -109.6976, reflection: "Resort stay; hurricane disrupted scuba.", timestamp: new Date("2025-10-10").getTime(), endDate: new Date("2025-10-14").getTime() },
  { id: "2025-11", locationName: "Antigua, Lake Atitlán, Tikal", lat: 14.5667, lng: -90.7333, reflection: "Extended family trip; jungle lodge stay.", timestamp: new Date("2025-11-15").getTime(), endDate: new Date("2025-12-02").getTime() },
  { id: "2025-12", locationName: "Tahoe", lat: 39.1970, lng: -120.2357, reflection: "KK joined OVFree; Kiki joined Palisades development team.", timestamp: new Date("2025-12-01").getTime(), endDate: new Date("2025-12-28").getTime() },
];