/**
 * AutoAI - Unified Vehicle Data
 * Merged from vehicle-comparison.html (full specs) and index.html (pricing)
 */

// Full vehicle specifications and details
const VEHICLES = {
  "GAC MOTOR::EMKOO": {
    "brand": "GAC MOTOR",
    "model": "EMKOO",
    "category": "suv",
    "variants": [
      "Executive",
      "Executive Plus"
    ],
    "engine": {
      "displacement_cc": 1497,
      "fuel": "Petrol",
      "max_power_kw": 130,
      "max_torque_nm": 270,
      "fuel_consumption": {
        "combined_l_per_100km": 6.4
      }
    },
    "transmission": [
      "7WDCT"
    ],
    "transmission_by_variant": {
      "Executive": "7WDCT",
      "Executive Plus": "7WDCT"
    },
    "dimensions": {
      "length": 4680,
      "width": 1901,
      "height": 1670,
      "wheelbase": 2750,
      "ground_clearance": null,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 420,
      "fuel_tank": 55
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "Dual Front Airbags",
      "Dual Front Side Airbags",
      "Side Curtain Airbags",
      "Front Row Seat Belts with Pretensioners and Force Limiters",
      "Front Row Seat Belts with Unfastened Reminders",
      "ISOFIX Child Safety Seat Anchors"
    ],
    "safety_variants": {
      "Executive Plus": [
        "Blind Spot Detection (BSD)+ Lane Change Assist (LCA)",
        "Rear Cross Traffic Alert (RCTA)+ Rear Collision Warning (RCW)",
        "Door Open Warning (DOW)",
        "Self Park Function"
      ]
    },
    "chassis": {
      "front_brakes": null,
      "rear_brakes": null,
      "front_susp": "McPherson Suspension",
      "tyres": "235/60 R18 / 235/55 R19",
      "platform": "Megastar Chassis"
    },
    "exterior": {
      "highlights": [
        "FRONT GRILLE WITH RHYTHMIC LIGHTING EFFECT",
        "LIGHTSABER-INSPIRED LED TAIL LIGHTS",
        "MECHA-STYLE SPOILER",
        "EYE OF ENLIGHTENMENT -- LED HEADLIGHTS",
        "Electric Hidden Door Handles"
      ],
      "wheels": {
        "Executive": "235/60 R18 Tyres",
        "Executive Plus": "235/55 R19 Tyres"
      }
    },
    "interior": {
      "ac": "Automatic Air Conditioning, Second Row Air Conditioning Vent",
      "upholstery": "Leatherette-trimmed Seats",
      "steering": "Four-way Adjustment Steering Wheel"
    },
    "infotainment": {
      "Executive": {
        "head_unit": "10.1-Inch Multifunctional Touch Screen",
        "CarPlay": true,
        "Android Phone Screen Mirroring": true,
        "Bluetooth": true
      },
      "Executive Plus": {
        "head_unit": "10.1-Inch Multifunctional Touch Screen",
        "Head-up Display (HUD)": true,
        "CarPlay": true,
        "Android Phone Screen Mirroring": true,
        "Bluetooth": true,
        "Wireless Charger": true,
        "Audio & Video System": true
      }
    },
    "warranty": {
      "comprehensive": null,
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": null,
      "interval": null,
      "includes": [],
      "excludes": []
    },
    "colours": [
      "Green",
      "White",
      "Grey",
      "Silver",
      "Black"
    ],
    "pricing": [
      {
        "trim": "Executive",
        "price": 519900,
        "excl": 452087
      },
      {
        "trim": "Executive Plus",
        "price": 559900,
        "excl": 486870
      }
    ],
    "key_selling_points": [
      "Aesthetic, industry design with a rhythmic lighting effect on the front grille and lightsaber-inspired LED tail lights.",
      "Golden powertrain with a 1.5 TGDI MegaWave engine and 7WDCT transmission for 130kW power and 6.4L/100km efficiency.",
      "Spacious cabin with a 2750mm super long wheelbase, 1901mm ultra-wide bodywork, and flexible 420L boot capacity.",
      "Comprehensive safety with a Safety Cage-type bodywork using 1500MPa steel and advanced Level 2 ADAS features."
    ],
    "target": {
      "description": "Tech-savvy individuals and modern families seeking a stylish, high-tech, and safe SUV",
      "lifestyle": "Appreciates cutting-edge design, advanced driver assistance features, and a comfortable, tech-enabled cabin",
      "positioning": "A futuristic, technology-driven compact SUV offering premium comfort and high efficiency"
    }
  },
  "GAC MOTOR::GS3 EMZOOM": {
    "brand": "GAC MOTOR",
    "model": "GS3 EMZOOM",
    "category": "suv",
    "variants": [
      "Comfort",
      "Executive",
      "R-Style"
    ],
    "engine": {
      "displacement_cc": 1497,
      "fuel": "Petrol",
      "max_power_kw": 130,
      "max_torque_nm": 270,
      "fuel_consumption": {
        "combined_l_per_100km": 6.2
      }
    },
    "transmission": [
      "7WDCT"
    ],
    "transmission_by_variant": {
      "Comfort": "7WDCT",
      "Executive": "7WDCT",
      "R-Style": "7WDCT"
    },
    "dimensions": {
      "length": 4410,
      "width": 1850,
      "height": 1600,
      "wheelbase": null,
      "ground_clearance": null,
      "doors": null,
      "drive": null
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 341,
      "fuel_tank": null
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "Dual Front Airbags",
      "Front Row Seat Belts with Reminders",
      "Tyre Pressure Monitoring System (TPMS)",
      "Hill-start Hold Control (HHC)",
      "Hill Descent Control (HDC)",
      "ISOFIX Child Safety Seat Anchors"
    ],
    "safety_variants": {
      "Comfort": [
        "Rear Parking Sensors",
        "Rear View Camera System"
      ],
      "Executive": [
        "Rear Parking Sensors",
        "Rear View Camera System",
        "Dual Front Side Airbags",
        "Side Curtain Airbags"
      ],
      "R-Style": [
        "Rear Parking Sensors",
        "Surround View Camera System",
        "Dual Front Side Airbags",
        "Side Curtain Airbags",
        "Automatic Emergency Braking (AEB)",
        "Forward Collision Warning (FCW)",
        "Traffic Sign Recognition System (TSR)",
        "High Beam Assist (HMA)",
        "Intelligent Speed Limit Control",
        "Lane Departure Warning (LDW)",
        "Adaptive Cruise Control (ACC)"
      ]
    },
    "chassis": {
      "front_brakes": null,
      "rear_brakes": null,
      "front_susp": "McPherson Suspension",
      "tyres": "225/55R R18",
      "platform": "GPMA platform"
    },
    "exterior": {
      "highlights": [
        "FLYING-MECHA FRONT FACE DESIGN",
        "BEAMING-EYE LED HEADLIGHTS",
        "GLOWING DART LED TAIL LIGHTS",
        "HIDDEN ELECTRIC DOOR HANDLES",
        "R-STYLE SPORTY KIT"
      ],
      "wheels": {
        "Comfort": "18-inch wheel hub",
        "Executive": "18-inch wheel hub",
        "R-Style": "18-inch wheel hub"
      }
    },
    "interior": {
      "ac": "Automatic Air Conditioning",
      "upholstery": "Fabric Seats + Synthetic Leather Stitching / Leather Seats",
      "steering": "Multifunction Steering Wheel"
    },
    "infotainment": {
      "head_unit": "10.25-Inch Multifunctional Touch Screen",
      "apple_carplay": "Wireless CarPlay via CarbitLink App",
      "android_auto": "Android Phone Screen Mirroring",
      "bluetooth": "Bluetooth Hands-free Phone System",
      "wireless_charging": "15W Wireless Phone Charging (R-Style)"
    },
    "warranty": {
      "comprehensive": null,
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": null,
      "interval": null,
      "includes": [],
      "excludes": []
    },
    "colours": [
      "Salt Lake Blue",
      "Moon Light Grey",
      "Ivory White",
      "Star Silver"
    ],
    "pricing": [
      {
        "trim": "Comfort",
        "price": 419900,
        "excl": 365130
      },
      {
        "trim": "Executive",
        "price": 449900,
        "excl": 391217
      },
      {
        "trim": "R-Style",
        "price": 499900,
        "excl": 434696
      }
    ],
    "key_selling_points": [
      "The H-shaped front face of the vehicle is engineered to be powerful & iconic.",
      "Super-size retractable panoramic sunroof allows for a great view of the stars & sky.",
      "The handles present themselves upon walking up to the car. Comfort, convenience, and serenity.",
      "With MegaWave Power, 0-100km/h acceleration takes only 8s."
    ],
    "target": {
      "description": null,
      "lifestyle": null,
      "positioning": null
    }
  },
  "Mahindra::Bolero": {
    "brand": "Mahindra",
    "model": "Bolero",
    "category": "bakkie",
    "variants": [
      "BMT Dropside 4X2",
      "Loader 4X2",
      "Single Cab 4X2",
      "Single Cab 4X4",
      "Double Cab 4X2",
      "Double Cab 4X4"
    ],
    "engine": {
      "displacement_cc": 2523,
      "fuel": "Diesel",
      "max_power_kw": 74,
      "max_torque_nm": 238,
      "fuel_consumption": {
        "BMT": 7,
        "NEF": 9.5
      }
    },
    "transmission": [
      "5 speed manual"
    ],
    "transmission_by_variant": {
      "All variants": "5 speed manual"
    },
    "dimensions": {
      "length": 4924,
      "width": 1815,
      "height": 1885,
      "wheelbase": 3014,
      "ground_clearance": 200,
      "doors": 2,
      "drive": "4x2 / 4x4"
    },
    "capacities": {
      "seating": 2,
      "boot_litres": null,
      "fuel_tank": 56
    },
    "weights": {
      "kerb_kg": 1470
    },
    "safety_standard": [
      "Disc-drum brake combination",
      "Anti-roll bar",
      "Corrosion-resistant sheet metal body"
    ],
    "safety_variants": {},
    "chassis": {
      "front_brakes": "Disc and caliper",
      "rear_brakes": "Drum",
      "front_susp": "Independent torsion bar with stabiliser bar",
      "tyres": "P235/75 R15",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Signature front grille",
        "High ground clearance",
        "Clear lens headlamps",
        "Side steps"
      ],
      "wheels": {
        "All variants": "15” steel rims"
      }
    },
    "interior": {
      "ac": "Powerful air-conditioning (on some derivatives)",
      "upholstery": "Vinyl / Fabric cloth",
      "steering": null
    },
    "infotainment": {},
    "warranty": {
      "comprehensive": "3-Year / 100,000km",
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": "Optional 3 Year / 60,000km",
      "interval": "10 000 km",
      "includes": [],
      "excludes": []
    },
    "colours": [],
    "pricing": [
      {
        "trim": "2.5D Maxi Truck Plus",
        "price": 215999,
        "excl": 187825
      }
    ],
    "key_selling_points": [
      "A great, go-anywhere workhorse with a solid stance and high ground clearance for tough terrains.",
      "Powered by a rugged 2.5L NEF turbo-diesel engine delivering 74kW and 238Nm of reliable torque.",
      "Highly functional large load box capable of taking loads up to 1.1 tons with high walls and fold-down panels.",
      "Easy to maintain and fuel economical, making it a tough contender in harsh working conditions."
    ],
    "target": {
      "description": "Business owners and contractors needing a durable, no-frills workhorse",
      "lifestyle": "Practical, hardworking lifestyle focused on utility and reliability in demanding conditions",
      "positioning": "One of the toughest vehicles on or off the road, built to carry any load with ease"
    }
  },
  "Mahindra::Pik Up Double Cab": {
    "brand": "Mahindra",
    "model": "Pik Up Double Cab",
    "category": "bakkie",
    "variants": [
      "S6 4X2",
      "S6 4X4",
      "S6 Auto 4x2",
      "S6 Auto 4x4",
      "S10 4X2",
      "S10 4X4",
      "S11 4X2",
      "S11 4X4",
      "S11 Karoo"
    ],
    "engine": {
      "displacement_cc": 2179,
      "fuel": "Diesel",
      "max_power_kw": 103,
      "max_torque_nm": 320,
      "fuel_consumption": {
        "AT": 9.3,
        "MT": 7.9
      }
    },
    "transmission": [
      "6-speed manual",
      "6-speed automatic"
    ],
    "transmission_by_variant": {
      "S6 & S10": "6-speed manual",
      "S6 Auto & S11": "6-speed automatic"
    },
    "dimensions": {
      "length": 5175,
      "width": 1820,
      "height": 1915,
      "wheelbase": 3040,
      "ground_clearance": 210,
      "doors": 4,
      "drive": "2WD / 4WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": null,
      "fuel_tank": 80
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "Anti-lock Braking System (ABS)",
      "Electronic Brake Distribution (EBD)",
      "Dual Airbags (driver/passenger)",
      "Side impact protection bars",
      "Collapsible steering column",
      "Isofix child seat attachments"
    ],
    "safety_variants": {
      "S11": [
        "ESP",
        "Reverse camera",
        "Rain sensing wipers",
        "Static bending headlamps"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Drum",
      "front_susp": null,
      "tyres": "245/75R16",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Aggressive front grille",
        "Dual projector headlamps with LED eyebrow DRLs",
        "Integrated bonnet scoop",
        "Bolt-on cab protector",
        "Side step"
      ],
      "wheels": {
        "S11": "Distinctive High Alloy Wheels",
        "S11 Karoo": "Distinctive Black Alloys"
      }
    },
    "interior": {
      "ac": "Manual (S6) / Automatic (S10, S11)",
      "upholstery": "Fabric",
      "steering": "New steering wheel"
    },
    "infotainment": {
      "S10 & S11": {
        "head_unit": "7” capacitive touchscreen infotainment centre",
        "apple_carplay": true,
        "android_auto": true,
        "bluetooth": true,
        "USB": true,
        "AUX": true
      },
      "S6": {
        "head_unit": "Integrated audio system",
        "USB": true,
        "AUX": true
      }
    },
    "warranty": {
      "comprehensive": "4-Years/120 000 km",
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": "5-Years/90 000 km",
      "interval": "20 000 km",
      "includes": [],
      "excludes": []
    },
    "colours": [],
    "pricing": [
      {
        "trim": "2.2D S6 DC 4x2",
        "price": 413849,
        "excl": 359869
      },
      {
        "trim": "2.2D S6 DC 4x4",
        "price": 454249,
        "excl": 394999
      },
      {
        "trim": "2.2D S6 DC 4x2 AT",
        "price": 440049,
        "excl": 382651
      },
      {
        "trim": "2.2D S11 DC 4x2 AT",
        "price": 481549,
        "excl": 418738
      },
      {
        "trim": "2.2D S11 DC 4x4 AT",
        "price": 521949,
        "excl": 453869
      }
    ],
    "key_selling_points": [
      "Practical and strong design with the legendary 2.2L mHawk turbo-diesel engine for effortless acceleration.",
      "Six-speed automatic transmission delivers power with consummate ease and superb reliability.",
      "Loaded with modern comforts including a 7-inch capacitive touchscreen, Bluetooth, and navigation.",
      "Advanced safety features like dual airbags, ABS with EBD, and ESP standard on S11 models."
    ],
    "target": {
      "description": "Hardworking individuals and families seeking a powerful, feature-rich double-cab bakkie",
      "lifestyle": "Adventurous and practical lifestyle requiring a vehicle that can handle both work and family trips",
      "positioning": "A powerful, automatic choice that combines strong working credentials with luxury and advanced technology"
    }
  },
  "Mahindra::Pik Up Single Cab": {
    "brand": "Mahindra",
    "model": "Pik Up Single Cab",
    "category": "bakkie",
    "variants": [
      "S4 Dropside",
      "S4 4X2",
      "S4 4X4",
      "S6 4X2",
      "S6 4X4",
      "S6 Karoo"
    ],
    "engine": {
      "displacement_cc": 2179,
      "fuel": "Diesel",
      "max_power_kw": 103,
      "max_torque_nm": 320,
      "fuel_consumption": {
        "2WD": 7.7,
        "4WD": 7.9
      }
    },
    "transmission": [
      "6-speed manual"
    ],
    "transmission_by_variant": {
      "All variants": "6-speed manual"
    },
    "dimensions": {
      "length": 5175,
      "width": 1820,
      "height": 1860,
      "wheelbase": 3040,
      "ground_clearance": 210,
      "doors": 2,
      "drive": "2WD / 4WD"
    },
    "capacities": {
      "seating": 2,
      "boot_litres": null,
      "fuel_tank": 80
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "Side impact protection bars",
      "Crash bar",
      "Seat belt reminder",
      "Digital immobilser"
    ],
    "safety_variants": {
      "S6": [
        "ABS with EBD",
        "Dual front airbags",
        "Seat Belt Pretensioner",
        "Auto-locking doors"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum",
      "front_susp": "Cushion Suspension",
      "tyres": "245/75R16",
      "platform": "Next generation platform body-on-frame"
    },
    "exterior": {
      "highlights": [
        "Mahindra signature front grille with chrome inserts",
        "Dual projector headlamps",
        "Integrated air-scoop in the bonnet",
        "Tough new wrap-around bumpers",
        "Side step"
      ],
      "wheels": {
        "Standard": "6.5J X 16” Steel",
        "Karoo": "Alloy wheels - Karoo"
      }
    },
    "interior": {
      "ac": "Manual (S6 models)",
      "upholstery": "Vinyl (S4) / Fabric (S6)",
      "steering": "Tiltable"
    },
    "infotainment": {
      "S6": {
        "head_unit": "Integrated audio system",
        "USB": true,
        "AUX": true
      }
    },
    "warranty": {
      "comprehensive": "4-Years/120 000 km",
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": "5-Years/90 000 km (S6)",
      "interval": "20 000 km",
      "includes": [],
      "excludes": []
    },
    "colours": [],
    "pricing": [
      {
        "trim": "2.2D S4 Chassis Cab",
        "price": 278149,
        "excl": 241869
      },
      {
        "trim": "2.2D S6 SC 4x2",
        "price": 350249,
        "excl": 304564
      },
      {
        "trim": "2.2D S6 SC 4x4",
        "price": 404249,
        "excl": 351521
      }
    ],
    "key_selling_points": [
      "The hardest worker you’ll ever have on your team with a massive 1200kg payload capacity.",
      "Powered by the legendary 2.2L mHawk turbo-diesel engine delivering 103kW and 320Nm of muscle.",
      "Equipped with Eaton Mechanical Locking Differential (MLD) for superior off-road traction.",
      "Assembled in South Africa and built to withstand the harshest conditions."
    ],
    "target": {
      "description": "Small business owners, farmers, and fleet managers needing a tough workhorse",
      "lifestyle": "Hardworking professionals who require a reliable and powerful vehicle for daily operations",
      "positioning": "A strong, practical, and highly capable single-cab bakkie built for toughness and reliability"
    }
  },
  "Mahindra::Pik Up Special Edition": {
    "brand": "Mahindra",
    "model": "Pik Up Special Edition",
    "category": "bakkie",
    "variants": [
      "Dusk",
      "Dawn",
      "Dew",
      "Storm"
    ],
    "engine": {
      "displacement_cc": 2179,
      "fuel": "Diesel",
      "max_power_kw": 103,
      "max_torque_nm": 320,
      "fuel_consumption": {
        "combined_l_per_100km": 9.3
      }
    },
    "transmission": [
      "6-speed automatic"
    ],
    "transmission_by_variant": {
      "All variants": "6-speed automatic"
    },
    "dimensions": {
      "length": 5175,
      "width": 1820,
      "height": 1915,
      "wheelbase": 3040,
      "ground_clearance": 210,
      "doors": 4,
      "drive": "4WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": null,
      "fuel_tank": 80
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "Electronic Brake Distribution (EBD)",
      "Seat belt pretensioner",
      "Air-bags (driver/passenger)",
      "Side impact protection bars",
      "Collapsible steering column",
      "Isofix child seat attachments"
    ],
    "safety_variants": {},
    "chassis": {
      "front_brakes": null,
      "rear_brakes": null,
      "front_susp": "Off-road suspension",
      "tyres": "265/75R16 Mud terrain",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Front steel off-road bumper",
        "Rear steel off-road bumper with tow bar",
        "Rear overfender",
        "Karoo Decal",
        "Dual projector headlamps"
      ],
      "wheels": {
        "All variants": "16 inch alloy wheels"
      }
    },
    "interior": {
      "ac": "Automatic",
      "upholstery": "Leather",
      "steering": null
    },
    "infotainment": {
      "all_variants": {
        "head_unit": "9” Infotainment centre",
        "apple_carplay": true,
        "android_auto": true,
        "bluetooth": true,
        "USB": true,
        "AUX": true
      }
    },
    "warranty": {
      "comprehensive": "4-Years/120 000 km",
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": "5-Years/90 000 km",
      "interval": "20 000 km",
      "includes": [],
      "excludes": []
    },
    "colours": [],
    "pricing": [
      {
        "trim": "2.2D S11 Dusk 4x4 AT",
        "price": 650149,
        "excl": 565347
      },
      {
        "trim": "2.2D S11 Dawn 4x4 AT",
        "price": 665349,
        "excl": 578564
      },
      {
        "trim": "2.2D S11 Storm 4x4 AT",
        "price": 665349,
        "excl": 578564
      },
      {
        "trim": "2.2D S11 Dew 4x4 AT",
        "price": 650149,
        "excl": 565347
      }
    ],
    "key_selling_points": [
      "Exclusive Special Edition range including Dusk, Dawn, Dew, and Storm variants with off-road enhancements.",
      "Tough front and rear steel off-road bumpers with integrated recovery points and tow bar.",
      "Equipped with 16-inch alloy wheels and high-traction mud terrain tyres for serious off-roading.",
      "Premium leather seats and a large 9-inch touchscreen infotainment system with smartphone connectivity."
    ],
    "target": {
      "description": "Adventurers and explorers who demand the ultimate off-road capability and exclusive styling",
      "lifestyle": "Daring, free-spirited explorers who want to seize the day and conquer any terrain",
      "positioning": "A premium, rugged, and highly exclusive range of special-edition 4x4 double-cab bakkies"
    }
  },
  "Mahindra::Scorpio-N": {
    "brand": "Mahindra",
    "model": "Scorpio-N",
    "category": "suv",
    "variants": [
      "Z4",
      "Z8",
      "Z8L"
    ],
    "engine": {
      "displacement_cc": 2200,
      "fuel": "Diesel",
      "max_power_kw": 128.6,
      "max_torque_nm": 400,
      "fuel_consumption": null
    },
    "transmission": [
      "6 AT"
    ],
    "transmission_by_variant": {},
    "dimensions": {
      "length": 4662,
      "width": 1918,
      "height": 1905,
      "wheelbase": 2750,
      "ground_clearance": null,
      "doors": 5,
      "drive": "Rear wheel drive / 4WD (4XPLOR)"
    },
    "capacities": {
      "seating": 7,
      "boot_litres": null,
      "fuel_tank": 57
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "Electronic Stability Control (ESC)",
      "Hill Hold Control + Hill Descent Control",
      "ABS + EBD",
      "ISOFIX",
      "Front and rear disc brakes"
    ],
    "safety_variants": {
      "Z8L": [
        "Driver Drowsiness Detection (DDD)"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated Disc",
      "rear_brakes": "Ventilated Disc",
      "front_susp": "Double Wishbone Suspension with Coil over Shocks with FDD & MTV-CL",
      "tyres": "255/60 R18 Alloy with Diamond Cut (Z8/Z8L)",
      "platform": "Next generation platform body on frame construction"
    },
    "exterior": {
      "highlights": [
        "Imposing stance with long hood and functional roofrails",
        "Signature double barrel headlamps",
        "Sting like DRLs encasing the foglamps",
        "Stacked tail lamps",
        "Sting inspired chrome design element"
      ],
      "wheels": {
        "Z4": "245/65 R17 Steel with Cover",
        "Z8": "255/60 R18 Alloy with Diamond Cut",
        "Z8L": "255/60 R18 Alloy with Diamond Cut"
      }
    },
    "interior": {
      "ac": "Dual zone FATC (full auto temperature controller) with smart clean zone",
      "upholstery": "Rich coffee-black leatherette upholstery",
      "steering": "Leatherette Wrapped Steering"
    },
    "infotainment": {
      "Z4": {
        "head_unit": "8” touch screen Infotainment",
        "apple_carplay": "Wired",
        "android_auto": "Wired"
      },
      "Z8": {
        "head_unit": "8” touch screen Infotainment",
        "apple_carplay": "Wired",
        "android_auto": "Wired"
      },
      "Z8L": {
        "head_unit": "8” touch screen Infotainment",
        "speakers": "SONY® 3D Immersive Audio 12 Speakers With Dual Channel Sub-woofer",
        "apple_carplay": "Wired",
        "android_auto": "Wired",
        "wireless_charging": true
      }
    },
    "warranty": {
      "comprehensive": null,
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": null,
      "interval": null,
      "includes": [],
      "excludes": []
    },
    "colours": [
      "Dazzling Silver",
      "Napoli Black",
      "Red Rage",
      "Grand Canyon",
      "Deep Forest",
      "Everest White"
    ],
    "pricing": [
      {
        "trim": "Z4 2.2D 4x2 AT",
        "price": 489999,
        "excl": 426086
      },
      {
        "trim": "Z8 2.2D 4x2 AT",
        "price": 536999,
        "excl": 466956
      },
      {
        "trim": "Z8 2.2D 4x4 AT",
        "price": 587999,
        "excl": 511303
      },
      {
        "trim": "Z8 2.2D 4x4 AT Adventure",
        "price": 665999,
        "excl": 579130
      },
      {
        "trim": "Z8L 2.2D 4x4 AT",
        "price": 622999,
        "excl": 541738
      },
      {
        "trim": "Z8L 2.2D 4x4 AT Adventure",
        "price": 699999,
        "excl": 608695
      }
    ],
    "key_selling_points": [
      "Unmissable design with a larger-than-life persona, towering new look, and imposing stance.",
      "Thrilling performance powered by a 2.2L mHawk Diesel engine delivering 128.6 kW and 400 Nm torque.",
      "Exceptional 4x4 capability with the 4Xplor intelligent terrain response system and shift-on-the-fly 4X4 high.",
      "Advanced intuitive safety including 6 airbags, ESC package, and Driver Drowsiness Alert."
    ],
    "target": {
      "description": "Aspirational individuals seeking a powerful, sophisticated, and highly capable SUV",
      "lifestyle": "Urban dwellers who enjoy weekend off-road adventures without compromising on luxury and tech",
      "positioning": "A true, authentic SUV combining sophisticated comfort, advanced technology, and rugged off-road capability"
    }
  },
  "Mahindra::XUV 3XO": {
    "brand": "Mahindra",
    "model": "XUV 3XO",
    "category": "suv",
    "variants": [
      "MX2",
      "MX3",
      "AX5",
      "AX5 LUXURY",
      "AX7 LUXURY"
    ],
    "engine": {
      "displacement_cc": 1200,
      "fuel": "Petrol",
      "max_power_kw": 82,
      "max_torque_nm": 200,
      "fuel_consumption": null
    },
    "transmission": [
      "6 MT",
      "6 AT"
    ],
    "transmission_by_variant": {},
    "dimensions": {
      "length": 3990,
      "width": 1821,
      "height": 1647,
      "wheelbase": 2600,
      "ground_clearance": null,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": null,
      "boot_litres": 364,
      "fuel_tank": 42
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "6 Airbags",
      "Electronic Stability Control (ESC)",
      "ISOFIX",
      "Reverse Parking Sensors",
      "Seat Belt Reminder for all Passengers",
      "Front Height Adjustable Seat Belt"
    ],
    "safety_variants": {
      "AX5": [
        "Rear View Camera",
        "Tyre Pressure Monitoring System"
      ],
      "AX5 LUXURY": [
        "Level 2 ADAS",
        "360-degree Surround View System with Blind View Monitor",
        "Auto Dimming IRVM",
        "Electronic Parking Brake with Auto Hold"
      ],
      "AX7 LUXURY": [
        "Level 2 ADAS",
        "360-Degree Surround View System with Blind View Monitor",
        "Electronic Parking Brake with Auto Hold",
        "Front Parking Assist System",
        "Auto Dimming IRVM"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Disc",
      "front_susp": "McPherson Strut with Anti-roll Bar",
      "tyres": "205/65 R16 Steel | 205/65 R16 Alloy | 215/55 R17 Alloy",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Piano black finish on the grille",
        "LED headlamps, LED DRLs and LED fog lamps",
        "Captivating LED Tail Lamps & Rear Infinity Light Bar",
        "Longest-in-class bonnet"
      ],
      "wheels": {
        "MX2": "R16 Steel Wheels",
        "AX5": "R16 Diamond Cut Alloys",
        "AX7 LUXURY": "R17 Diamond Cut Alloys"
      }
    },
    "interior": {
      "ac": "Rear AC Vents (Standard from base)",
      "upholstery": "Leatherette Seats (AX7 LUXURY)",
      "steering": "Leather Steering (AX5 and above)"
    },
    "infotainment": {
      "MX2": {
        "9_inch_display_audio": "Optional",
        "speakers": 4
      },
      "MX3": {
        "26.03_cm_hd_infotainment": true,
        "wireless_android_auto": true,
        "wired_apple_carplay": true,
        "wireless_charger": true
      },
      "AX5": {
        "twin_hd_26.03_cm_screens": true,
        "wireless_android_auto": true,
        "wireless_apple_carplay": true,
        "speakers": 6
      },
      "AX7 LUXURY": {
        "harman_kardon_premium_audio": true,
        "amplifier_and_sub_woofer": true
      }
    },
    "warranty": {
      "comprehensive": "5-year / 150 000-kilometre mechanical warranty",
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": "3-year (MX) / 5-year (AX)",
      "interval": null,
      "includes": [],
      "excludes": []
    },
    "colours": [
      "CITRINE YELLOW",
      "NEBULA BLUE",
      "DEEP FOREST",
      "STEALTH BLACK",
      "TANGO RED",
      "DUNE BEIGE",
      "EVEREST WHITE",
      "GALAXY GREY",
      "CITRINE YELLOW",
      "NEBULA BLUE"
    ],
    "pricing": [
      {
        "trim": "MX1 1.2T PV",
        "price": 296999,
        "excl": 258260
      },
      {
        "trim": "MX2 1.2T MT",
        "price": 259999,
        "excl": 226086
      },
      {
        "trim": "MX2 1.2T AT",
        "price": 279999,
        "excl": 243477
      },
      {
        "trim": "MX3 1.2T MT",
        "price": 279999,
        "excl": 243477
      },
      {
        "trim": "MX3 1.2T AT",
        "price": 300899,
        "excl": 261651
      },
      {
        "trim": "AX5 1.2T MT",
        "price": 319999,
        "excl": 278260
      },
      {
        "trim": "AX5 1.2T AT",
        "price": 344999,
        "excl": 299999
      },
      {
        "trim": "AX5L 1.2T AT",
        "price": 374999,
        "excl": 326086
      },
      {
        "trim": "AX7L 1.2T AT",
        "price": 404999,
        "excl": 352173
      }
    ],
    "key_selling_points": [
      "The XUV 3XO introduces a bold, athletic silhouette that commands attention.",
      "First-in-segment features like a 65 W USB-C charging point and Electronic Parking Brake with Auto Hold.",
      "Immersive audio experience with Harman Kardon Premium Audio, 7 speakers and a nine-channel equaliser.",
      "Level 2 ADAS with 10 features ensures enhanced driving assistance and safety measures."
    ],
    "target": {
      "description": null,
      "lifestyle": null,
      "positioning": null
    }
  },
  "Mahindra::XUV700": {
    "brand": "Mahindra",
    "model": "XUV700",
    "category": "suv",
    "variants": [
      "AX5",
      "AX7",
      "AX7L"
    ],
    "engine": {
      "displacement_cc": 1997,
      "fuel": "Petrol",
      "max_power_kw": 149,
      "max_torque_nm": 380,
      "fuel_consumption": null
    },
    "transmission": [
      "6AT"
    ],
    "transmission_by_variant": {
      "AX5": "6AT",
      "AX7": "6AT",
      "AX7L": "6AT"
    },
    "dimensions": {
      "length": 4695,
      "width": 1890,
      "height": 1755,
      "wheelbase": 2750,
      "ground_clearance": null,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 7,
      "boot_litres": null,
      "fuel_tank": 60
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "Latest Gen Electronic Stability Program",
      "4 airbags - additional Curtain Airbags for all rows (AX5)",
      "Personalized Safety Alerts"
    ],
    "safety_variants": {
      "AX7": [
        "Advanced Driver Assistance Systems (ADAS)",
        "Adaptive Cruise Control",
        "Smart Pilot Assist",
        "Forward Collision Warning",
        "Automatic Emergency Braking",
        "Lane Departure Warning",
        "Lane Keep Assist",
        "Traffic Sign Recognition",
        "High Beam Assist",
        "6 airbags - additional side airbags",
        "Tyre Pressure Monitoring System",
        "Driver Drowsiness Detection"
      ],
      "AX7L": [
        "7 airbags (Knee Airbag)",
        "Electronic Park Brake",
        "Stop and Go function in Adaptive Cruise Control",
        "360° Surround View",
        "Blind View Monitor"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated Disc",
      "rear_brakes": "Solid Disc / Electronic Parking Brakes (AX7)",
      "front_susp": "McPherson Strut Independent Suspension with FSD and Stabilizer bar",
      "tyres": "235/60 R17 Alloy (AX5) / 235/60 R18 Alloy (AX7 & AX7L)",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Skyroof (Panoramic sunroof)",
        "LED Clear-view Headlamps with Auto Booster",
        "Captivating Arrow-head LED Taillamps",
        "Smart Door Handles"
      ],
      "wheels": {
        "AX5": "R17 Diamond Cut Alloy",
        "AX7": "R18 Diamond Cut Alloy",
        "AX7L": "Black Alloy Wheels (Black Edition)"
      }
    },
    "interior": {
      "ac": "Dual Zone Climate Control (AX7)",
      "upholstery": "Leatherette Seat (AX7)",
      "steering": "Leather Steering"
    },
    "infotainment": {
      "AX5": {
        "head_unit": "Dual HD 26.03 cm Infotainment",
        "apple_carplay": "Wireless Apple CarPlay",
        "android_auto": "Wired Android Auto",
        "speakers": "6 Speakers with Sound Staging"
      },
      "AX7L": {
        "head_unit": "Dual HD 26.03 cm Infotainment",
        "apple_carplay": "Wireless Apple CarPlay",
        "android_auto": "Wireless Android Auto",
        "speakers": "3D Audio with 12 Speaker by SONY"
      }
    },
    "warranty": {
      "comprehensive": null,
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": null,
      "interval": null,
      "includes": [],
      "excludes": []
    },
    "colours": [
      "EVEREST WHITE",
      "MIDNIGHT BLACK",
      "DAZZLING SILVER",
      "RED RAGE",
      "ELECTRIC BLUE",
      "Napoli Black"
    ],
    "pricing": [
      {
        "trim": "AX5 2.0T AT",
        "price": 495199,
        "excl": 430608
      },
      {
        "trim": "AX7 2.0T AT",
        "price": 551399,
        "excl": 479477
      },
      {
        "trim": "AX7L 2.0T AT",
        "price": 599999,
        "excl": 521738
      },
      {
        "trim": "AX7L 2.0T AT Black Edition",
        "price": 627900,
        "excl": 546000
      },
      {
        "trim": "AX7L 2.0T AT Sport Edition",
        "price": 627900,
        "excl": 546000
      }
    ],
    "key_selling_points": [
      "Most powerful turbocharged 2.0L mStallion petrol engine in its class delivering an unparalleled rush of 149kW.",
      "Integrated dual 26.03 cm superscreen housing advanced infotainment and a digital cluster.",
      "Level 2 Advanced Driver Assistance Systems (ADAS) making the XUV700 an impenetrable fortress on the road.",
      "Expansive Skyroof™ brings your love for the outside into every drive."
    ],
    "target": {
      "description": "Tech enthusiasts and families looking for a powerful, luxurious, and highly safe 7-seater SUV",
      "lifestyle": "People who desire an exhilarating driving experience paired with top-tier technology and comfort",
      "positioning": "A highly advanced, powerful, and luxurious SUV that offers unmatched technology and safety features"
    }
  },
  "Renault::CAPTUR": {
    "brand": "Renault",
    "model": "CAPTUR",
    "category": "suv",
    "variants": [
      "Zen",
      "Intens"
    ],
    "engine": {
      "displacement_cc": 1332,
      "fuel": "Unleaded petrol",
      "max_power_kw": 113,
      "max_torque_nm": 270,
      "fuel_consumption": {
        "combined_l_per_100km": 6.6
      }
    },
    "transmission": [
      "EDC"
    ],
    "transmission_by_variant": {
      "All variants": "EDC"
    },
    "dimensions": {
      "length": null,
      "width": null,
      "height": null,
      "wheelbase": null,
      "ground_clearance": 174,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 404,
      "fuel_tank": 48
    },
    "weights": {
      "kerb_kg": 1365
    },
    "safety_standard": [
      "6 airbags, including side curtain airbags",
      "Isofix (i-Size) attachments",
      "Seat belt warning with presence detection",
      "Front headrests with anti whiplash function",
      "Emergency Brake Assist (EBA)",
      "Electronic Stability Control (ESC with ABS)"
    ],
    "safety_variants": {
      "Intens": [
        "Blind spot detection",
        "Lane departure warning",
        "PureVision LED headlights with high beam assist"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": null,
      "front_susp": null,
      "tyres": "215/60 R17",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Athletic shoulders and wheel arches",
        "Front and rear protective skid plates",
        "Signature C-shaped LEDs",
        "Modular roof bars"
      ],
      "wheels": {
        "Zen": "17” Flex wheel cover",
        "Intens": "17” Bahamas Black diamond-cut alloy wheels"
      }
    },
    "interior": {
      "ac": "Automatic climate control",
      "upholstery": "Black and anthracite 3D Mountain fabric (Zen) / Black TEP with black velvet (Intens)",
      "steering": "Foam (Zen) / Synthetic stitched leather (Intens)"
    },
    "infotainment": {
      "Zen": {
        "head_unit": "Easy Link 7”",
        "apple_carplay": true,
        "android_auto": true,
        "navigation": true
      },
      "Intens": {
        "head_unit": "Easy Link 9.3” touchscreen",
        "apple_carplay": true,
        "android_auto": true,
        "navigation": true,
        "ARKAMYS Auditorium sound": true
      }
    },
    "warranty": {
      "comprehensive": "5 Year / 150 000km Warranty",
      "body_corrosion": "6 Year anti-corrosion warranty",
      "note": null
    },
    "service_plan": {
      "duration": "3 Year / 45 000km service plan",
      "interval": "15 000km service intervals",
      "includes": [],
      "excludes": []
    },
    "colours": [
      "Oyster Grey",
      "Mercury Silver",
      "Marine Blue",
      "Ivory White",
      "Ocean Blue",
      "Passion Red"
    ],
    "pricing": [
      {
        "trim": "1.3L Turbo ZEN EDC",
        "price": 489999,
        "excl": 426086
      },
      {
        "trim": "1.3L Turbo INTENS EDC",
        "price": 509999,
        "excl": 443477
      }
    ],
    "key_selling_points": [
      "100% New, 100% Captur with an athletic SUV look and signature C-shaped LED lights.",
      "Revolutionary interior featuring a Smart Cockpit with a large 9.3-inch driver-oriented touchscreen.",
      "Advanced dual-clutch EDC automatic transmission paired with a powerful 1.3 Turbo engine.",
      "Best-in-class modularity with a sliding rear bench and a large boot volume of up to 536 litres."
    ],
    "target": {
      "description": "Modern urban explorers and families who value modularity, technology, and stylish SUV design",
      "lifestyle": "Connected, tech-savvy lifestyle requiring a versatile and premium crossover for city and travel",
      "positioning": "A highly advanced, modular, and stylish compact SUV that marks its difference with top-of-the-range materials"
    }
  },
  "Renault::CLIO": {
    "brand": "Renault",
    "model": "CLIO",
    "category": "hatchback",
    "variants": [
      "Life",
      "Zen",
      "Intens"
    ],
    "engine": {
      "displacement_cc": 999,
      "fuel": "Unleaded petrol",
      "max_power_kw": 74,
      "max_torque_nm": 160,
      "fuel_consumption": {
        "combined_l_per_100km": 5.7
      }
    },
    "transmission": [
      "5-speed Manual"
    ],
    "transmission_by_variant": {
      "All variants": "Manual"
    },
    "dimensions": {
      "length": 4050,
      "width": 1798,
      "height": 1440,
      "wheelbase": 2583,
      "ground_clearance": 142,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 361,
      "fuel_tank": 42
    },
    "weights": {
      "kerb_kg": 983
    },
    "safety_standard": [
      "ABS with EBD and EBA",
      "Electronic Stability Control (ESC)",
      "Hill Start Assist (HSA)",
      "Seat belt warning with presence detection",
      "Front headrests with anti whiplash function",
      "Isofix (i-Size) attachments"
    ],
    "safety_variants": {
      "Life": [
        "4 airbags"
      ],
      "Zen": [
        "6 airbags"
      ],
      "Intens": [
        "Lane Departure Warning (LDW)",
        "Automatic high/low beams (AHL)",
        "Rear parking camera",
        "Front parking sensors"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Drum / Disc (Intens)",
      "front_susp": "Pseudo Mac Pherson strut",
      "tyres": "195/55 R16",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Sensual lines and dynamic profile",
        "C-shaped brand light",
        "Full LED lighting",
        "Elegantly concealed rear door handles"
      ],
      "wheels": {
        "Life": "16” Amicitia Flex wheels",
        "Zen": "16” Amicitia Flex wheels",
        "Intens": "17” Viva Stella diamond cut alloy wheels"
      }
    },
    "interior": {
      "ac": "Manual (Life, Zen) / Automatic (Intens)",
      "upholstery": "Black and anthracite 3D Mountain upholstery (Zen) / black TEP with black velvet (Intens)",
      "steering": "Multifunction steering wheel"
    },
    "infotainment": {
      "Life & Zen": {
        "head_unit": "EASY LINK 7” touchscreen",
        "apple_carplay": true,
        "android_auto": true,
        "navigation": true,
        "speakers": 6
      },
      "Intens": {
        "head_unit": "Easy Link 9.3” touchscreen",
        "apple_carplay": true,
        "android_auto": true,
        "navigation": true,
        "speakers": 6
      }
    },
    "warranty": {
      "comprehensive": "5 Year / 150 000km Warranty",
      "body_corrosion": "6 Year anti-corrosion warranty",
      "note": null
    },
    "service_plan": {
      "duration": "2 Year / 30 000km service plan",
      "interval": "15 000km service intervals",
      "includes": [],
      "excludes": []
    },
    "colours": [
      "Glacier White",
      "Mercury",
      "Flame Red"
    ],
    "pricing": [],
    "key_selling_points": [
      "Seductive style with sensual lines, a dynamic profile, and iconic C-shaped LED lighting.",
      "A perfect smart cockpit with quality materials, a large 9.3-inch touchscreen, and customisable ambient lighting.",
      "Driving pleasure ensured by a new 74kW Turbo engine offering top-level performance and economy.",
      "Total connectivity with the EASY LINK system, compatible with Apple CarPlay and Android Auto."
    ],
    "target": {
      "description": "Style-conscious urban drivers who value technology, quality, and a dynamic driving experience",
      "lifestyle": "Modern, connected lifestyle with a passion for high-performance and high-tech vehicles",
      "positioning": "A seductive and high-tech hatchback that combines French style with 5-star safety and premium comfort"
    }
  },
  "Renault::Duster": {
    "brand": "Renault",
    "model": "Duster",
    "category": "suv",
    "variants": [
      "Zen EDC (4x2)",
      "Zen 6MT (4WD) MHEV",
      "Intens EDC (4x2)"
    ],
    "engine": {
      "displacement_cc": 1200,
      "fuel": "Petrol / Petrol MHEV",
      "max_power_kw": 113,
      "max_torque_nm": 250,
      "fuel_consumption": {
        "combined_l_per_100km": 5.7,
        "TCe_150": 6.5
      }
    },
    "transmission": [
      "7-Speed EDC",
      "6MT"
    ],
    "transmission_by_variant": {
      "Zen EDC (4x2)": "7-Speed EDC",
      "Zen 6MT (4WD) MHEV": "6 speed manual",
      "Intens EDC (4x2)": "7-Speed EDC"
    },
    "dimensions": {
      "length": 4343,
      "width": 2092,
      "height": 1656,
      "wheelbase": 2657,
      "ground_clearance": 217,
      "doors": 5,
      "drive": "4x2 / 4WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 594,
      "fuel_tank": 50
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "driver and front passenger side and curtain airbags",
      "ESC, ABS",
      "automatic headlights and rain sensor",
      "electric parking brake",
      "tyre pressure detector",
      "Isofix"
    ],
    "safety_variants": {
      "Intens": [
        "blind spot warning system",
        "multiview camera",
        "360 sensors"
      ],
      "Zen 4WD": [
        "hill descent assist"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": null,
      "front_susp": null,
      "tyres": "17’’ / 18’’ alloy wheels",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Starkle® side protectors and wheel arches",
        "Modular roof bars",
        "Y-shaped headlight graphics",
        "New Renault logo"
      ],
      "wheels": {
        "Zen": "17\" Tergan full diamond-cut alloy wheels",
        "Intens": "18\" Semi diamond cut Tagasan alloy wheels"
      }
    },
    "interior": {
      "ac": "Automatic air conditioning (Intens)",
      "upholstery": "Synthetic leather / suede & cloth (Intens)",
      "steering": "New steering wheel design"
    },
    "infotainment": {
      "head_unit": "openR 10.1'' touchscreen multimedia",
      "apple_carplay": "Wireless",
      "android_auto": "Wireless",
      "smartphone_replication": true
    },
    "warranty": {
      "comprehensive": "5 Year / 150 000km Warranty",
      "body_corrosion": null,
      "note": null
    },
    "service_plan": {
      "duration": "3 year / 45 000km Service Plan",
      "interval": null,
      "includes": [],
      "excludes": []
    },
    "colours": [
      "sandstone beige",
      "glacier white",
      "pearl black",
      "cedar green",
      "mercury silver",
      "terracotta brown",
      "dusty grey"
    ],
    "pricing": [
      {
        "trim": "1.3L Turbo ZEN EDC 4x2",
        "price": 489999,
        "excl": 426086
      },
      {
        "trim": "1.3L Turbo INTENS EDC 4x2",
        "price": 519999,
        "excl": 452173
      },
      {
        "trim": "1.2L Turbo ZEN 4WD MHEV",
        "price": 549999,
        "excl": 478260
      }
    ],
    "key_selling_points": [
      "Redesigned iconic SUV with a more robust, outdoor personality and modular roof bars.",
      "Advanced 4WD performance with 5 different driving modes and high ground clearance of up to 217mm.",
      "Mild hybrid version offers eco-smart driving with a range of up to 850km.",
      "Spacious redesigned interior with 10.1-inch openR screen and wireless smartphone replication."
    ],
    "target": {
      "description": "Adventure-seekers and families who need a robust, off-road capable, and technologically advanced SUV",
      "lifestyle": "Active outdoor lifestyle involving travel, camping, and exploring diverse terrains",
      "positioning": "A redesigned, iconic SUV that combines true off-road capability with modern technology and sustainability"
    }
  },
  "Renault::KIGER": {
    "brand": "Renault",
    "model": "KIGER",
    "category": "suv",
    "variants": [
      "LIFE",
      "ZEN",
      "INTENS"
    ],
    "engine": {
      "displacement_cc": 999,
      "fuel": "Unleaded",
      "max_power_kw": 74,
      "max_torque_nm": 160,
      "fuel_consumption": {
        "combined_l_per_100km": 5
      }
    },
    "transmission": [
      "Manual",
      "EASY-R AMT",
      "CVT X-TRONIC"
    ],
    "transmission_by_variant": {},
    "dimensions": {
      "length": 3991,
      "width": 1750,
      "height": 1605,
      "wheelbase": 2500,
      "ground_clearance": 205,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 405,
      "fuel_tank": 40
    },
    "weights": {
      "kerb_kg": 911
    },
    "safety_standard": [
      "Dual Airbags - driver, front passenger",
      "ABS + EBD",
      "Rear Park Distance Sensors",
      "Seat belt reminder - Driver and front passenger",
      "Speed sensing door lock",
      "Impact sensing unlock"
    ],
    "safety_variants": {
      "ZEN": [
        "Front side airbags",
        "Reverse parking camera with guidelines"
      ],
      "INTENS": [
        "Front side airbags",
        "ESP",
        "Reverse parking camera with guidelines"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Drum",
      "front_susp": "Mac Pherson strut with lower transverse link",
      "tyres": "195/60 R16",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Tri-octa LED Pure Vision headlamps",
        "LED DRLs day & night",
        "C-shaped signature LED tail lamps",
        "Chrome front grille",
        "Sporty rear spoiler"
      ],
      "wheels": {
        "LIFE": "16\" Full wheel covers",
        "ZEN": "16\" Flex wheels",
        "INTENS": "16\" Bi-Tone Diamond cut alloys"
      }
    },
    "interior": {
      "ac": "Automatic air conditioning (Intens)",
      "upholstery": "Quilted emboss fabric (Intens)",
      "steering": "Steering wheel with artificial leather wrap (Intens)"
    },
    "infotainment": {
      "LIFE": {
        "head_unit": "DIN radio with USB port",
        "speakers": 2
      },
      "ZEN": {
        "head_unit": "8\" Touchscreen display",
        "speakers": 4,
        "apple_carplay": true,
        "android_auto": true
      },
      "INTENS": {
        "head_unit": "8\" Touchscreen display",
        "speakers": 4,
        "tweeters": 2,
        "apple_carplay": "Wireless",
        "android_auto": "Wireless"
      }
    },
    "warranty": {
      "comprehensive": "5 Year / 150 000km mechanical warranty",
      "body_corrosion": "6 Year anti-corrosion warranty",
      "note": null
    },
    "service_plan": {
      "duration": "2 Year / 30 000km service plan",
      "interval": "15 000km service intervals",
      "includes": [],
      "excludes": []
    },
    "colours": [
      "MAHOGANY BROWN",
      "ICE COOL WHITE",
      "MOONLIGHT SILVER",
      "HONEY YELLOW",
      "CASPIAN BLUE",
      "RADIANT RED"
    ],
    "pricing": [
      {
        "trim": "1.0L Energy LIFE",
        "price": 249999,
        "excl": 217390
      },
      {
        "trim": "1.0L Energy ZEN",
        "price": 264999,
        "excl": 230434
      },
      {
        "trim": "1.0L Energy ZEN AMT",
        "price": 274999,
        "excl": 239130
      },
      {
        "trim": "1.0L Turbo ZEN",
        "price": 319999,
        "excl": 278260
      },
      {
        "trim": "1.0L Turbo INTENS",
        "price": 339999,
        "excl": 295651
      },
      {
        "trim": "1.0L Turbo INTENS CVT",
        "price": 359999,
        "excl": 313043
      }
    ],
    "key_selling_points": [
      "Stunning design with a muscular SUV stance and 205mm ground clearance.",
      "Smart interiors featuring an 8-inch floating touchscreen with wireless Apple CarPlay and Android Auto.",
      "Sporty performance driven by a new 1.0L Turbo petrol engine with multi-sense drive modes.",
      "Class-leading storage with a 405L boot space and 25.2L of total cabin storage."
    ],
    "target": {
      "description": "Young, active individuals and couples who want a stylish and spacious compact SUV",
      "lifestyle": "Adventure-seekers needing a versatile vehicle for city driving and weekend getaways",
      "positioning": "A stunning, smart, and sporty compact SUV offering exceptional space and high-end tech features"
    }
  },
  "Renault::KOLEOS": {
    "brand": "Renault",
    "model": "KOLEOS",
    "category": "suv",
    "variants": [
      "DYNAMIQUE 4X2",
      "DYNAMIQUE 4X4",
      "INTENS 4X2"
    ],
    "engine": {
      "displacement_cc": 2488,
      "fuel": "Petrol",
      "max_power_kw": 126,
      "max_torque_nm": 233,
      "fuel_consumption": {
        "combined_l_per_100km": 8.1,
        "4X4": 8.3
      }
    },
    "transmission": [
      "X-Tronic CVT"
    ],
    "transmission_by_variant": {
      "All variants": "X-Tronic CVT"
    },
    "dimensions": {
      "length": 4672,
      "width": 1813,
      "height": 1667,
      "wheelbase": 2704,
      "ground_clearance": 210,
      "doors": 5,
      "drive": "2WD / 4WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 464,
      "fuel_tank": 60
    },
    "weights": {
      "kerb_kg": 1427
    },
    "safety_standard": [
      "ABS (Anti-lock Braking System)",
      "EBA (Emergency Brake Assist)",
      "Electronic Stability Control (ESC) with Hill Start Assist",
      "Electronic Brakeforce Distribution (EBD)",
      "Driver, front passenger & curtain airbags",
      "Isofix 3-point seat attachment system"
    ],
    "safety_variants": {
      "INTENS": [
        "Self park assist control",
        "Seat belt warning reminder - 3 rear seats"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Disc",
      "front_susp": "Pseudo Mac Pherson strut",
      "tyres": "225/60 R18",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Large shoulders and muscular side panels",
        "Signature full LED lighting",
        "Chrome inserts starting at headlamps",
        "Motorised tailgate with foot sensor"
      ],
      "wheels": {
        "All variants": "18” Two-Tone Alloy wheels"
      }
    },
    "interior": {
      "ac": "Automatic dual-zone with rear seat ducts",
      "upholstery": "Leather (Pigmented corrected grain leather/calfskin)",
      "steering": "Leather steering wheel"
    },
    "infotainment": {
      "all_variants": {
        "head_unit": "R-Link 2. 8.7” capacitive touch screen",
        "apple_carplay": true,
        "android_auto": true,
        "navigation": true,
        "Arkamys 3D sound": true
      }
    },
    "warranty": {
      "comprehensive": "5 Year / 150 000km mechanical warranty",
      "body_corrosion": "6 Year anti-corrosion warranty",
      "note": null
    },
    "service_plan": {
      "duration": "5 Year / 90 000km service plan",
      "interval": "15 000km service intervals",
      "includes": [],
      "excludes": []
    },
    "colours": [
      "PEARL WHITE",
      "TITANIUM GREY",
      "RED MILLESIME"
    ],
    "pricing": [],
    "key_selling_points": [
      "A perfect alliance of power and refinement with an assertive design that inspires respect.",
      "Exceeds expectations with premium levels of comfort, quality materials, and finely stitched leather.",
      "Equipped with the R-LINK 2 connected 8.7-inch tablet for intuitive control of all vehicle functions.",
      "Exceptional acoustic experience delivered via the premium Arkamys 3D Sound System."
    ],
    "target": {
      "description": "Ambitious individuals seeking an upscale SUV that offers the luxury of a premium sedan",
      "lifestyle": "Sophisticated lifestyle with high demands for both off-road capability and on-road refinement",
      "positioning": "A charismatic and powerful SUV that broadens your outlook through innovative style and technology"
    }
  },
  "Renault::Kwid": {
    "brand": "Renault",
    "model": "Kwid",
    "category": "hatchback",
    "variants": [
      "LIFE",
      "ZEN",
      "CLIMBER"
    ],
    "engine": {
      "displacement_cc": 999,
      "fuel": "Unleaded",
      "max_power_kw": 50,
      "max_torque_nm": 91,
      "fuel_consumption": {
        "urban_l_per_100km": {
          "LIFE": 5.9,
          "ZEN_Manual": 5.9,
          "AMT_ZEN_and_CLIMBER": 5.1,
          "CLIMBER_Manual": 5.9
        },
        "extra_urban_l_per_100km": {
          "LIFE": 4.1,
          "ZEN_Manual": 4.1,
          "AMT_ZEN_and_CLIMBER": 4,
          "CLIMBER_Manual": 4.1
        },
        "combined_l_per_100km": {
          "LIFE": 4.9,
          "ZEN_Manual": 4.9,
          "AMT_ZEN_and_CLIMBER": 4.9,
          "CLIMBER_Manual": 4.9
        }
      }
    },
    "transmission": [
      "5-speed Manual",
      "5-speed AMT - Easy-R Technology"
    ],
    "transmission_by_variant": {
      "LIFE": "Manual only",
      "ZEN": "Manual or AMT",
      "CLIMBER": "Manual or AMT"
    },
    "dimensions": {
      "length": 3731,
      "width": 1579,
      "height": 1513,
      "wheelbase": 2422,
      "ground_clearance": 180,
      "doors": 5,
      "drive": "FWD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 279,
      "fuel_tank": 28
    },
    "weights": {
      "kerb_kg": 736
    },
    "safety_standard": [
      "Airbag - Driver and front passenger (dual airbags)",
      "High safety Pro-Sense front seat belts",
      "ABS + EBD",
      "Rear Park Distance Sensors - Ultra Sonic",
      "Seat belt reminder",
      "Front and rear seat belts"
    ],
    "safety_variants": {
      "ZEN": [
        "Reverse parking camera with guidelines"
      ],
      "CLIMBER": [
        "Reverse parking camera with guidelines"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Drum",
      "front_susp": "MacPherson strut with lower transverse link",
      "tyres": "165/70 R14",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Bold structured new front grille",
        "SUV-styled headlamps with Silver Streak LED DRLs",
        "Tail lamps with LED light guides",
        "Boomerang shaped sculpted roof with arching roof rails",
        "Wheel arch cladding"
      ],
      "wheels": {
        "LIFE": "14\" Silver/metallic Dark Metal wheel covers",
        "ZEN": "14\" Silver/metallic Dark Metal wheel covers",
        "CLIMBER": "14\" Dual Tone multi-spoke wheels with arching roof rails and sporty white inserts"
      }
    },
    "interior": {
      "ac": "Air conditioner and Heater - standard across all variants",
      "upholstery": {
        "LIFE": "Black and grey",
        "ZEN": "Crossway Black, red, grey",
        "CLIMBER": "Striped embossing sporty orange, white, black"
      },
      "steering": null
    },
    "infotainment": {
      "LIFE": {
        "head_unit": "Single DIN Radio",
        "screen_size_inches": null,
        "touchscreen": false,
        "fm_am_tuner": true,
        "bluetooth_audio_streaming": true,
        "bluetooth_hands_free": true,
        "apple_carplay": false,
        "android_auto": false,
        "video_playback": false,
        "voice_recognition": false,
        "usb_port": true,
        "usb_fast_charger": false,
        "aux_in": true,
        "smartphone_replication": false,
        "reversing_camera": false,
        "front_speakers": 2,
        "antenna": true,
        "vehicle_applications": false
      },
      "ZEN": {
        "head_unit": "8\" MediaNav Evolution touchscreen",
        "screen_size_inches": 8,
        "touchscreen": true,
        "fm_am_tuner": true,
        "bluetooth_audio_streaming": true,
        "bluetooth_hands_free": true,
        "apple_carplay": true,
        "android_auto": true,
        "video_playback": true,
        "voice_recognition": true,
        "usb_port": true,
        "usb_fast_charger_2_4a": true,
        "aux_in": true,
        "smartphone_replication": true,
        "reversing_camera_with_guidelines": true,
        "rear_parking_sensors": true,
        "front_speakers": 2,
        "antenna": true,
        "vehicle_applications": true
      },
      "CLIMBER": {
        "head_unit": "8\" MediaNav Evolution touchscreen",
        "screen_size_inches": 8,
        "touchscreen": true,
        "fm_am_tuner": true,
        "bluetooth_audio_streaming": true,
        "bluetooth_hands_free": true,
        "apple_carplay": true,
        "android_auto": true,
        "video_playback": true,
        "voice_recognition": true,
        "usb_port": true,
        "usb_fast_charger_2_4a": true,
        "aux_in": true,
        "smartphone_replication": true,
        "reversing_camera_with_guidelines": true,
        "rear_parking_sensors": true,
        "front_speakers": 2,
        "antenna": true,
        "vehicle_applications": true
      }
    },
    "warranty": {
      "comprehensive": "5 years or 150 000km, whichever comes first - covers repair of any unexpected electronic or mechanical malfunctions",
      "body_corrosion": "6 years",
      "note": "Warranty does not cover wear and tear items such as shock absorbers, brake pads, clutch, cam belt, etc. T's and C's apply."
    },
    "service_plan": {
      "duration": "Available as standard or tailor-made options",
      "interval": "15 000km service intervals",
      "includes": [
        "Scheduled service programme costs"
      ],
      "excludes": [
        "Wear and tear items (standard Service Plan only)"
      ]
    },
    "colours": [
      "HONEY YELLOW",
      "OUTBACK BRONZE",
      "FIERY RED",
      "MOONLIGHT SILVER",
      "ICE COOL WHITE",
      "ZANSKAR BLUE"
    ],
    "pricing": [
      {
        "trim": "1.0L LIFE",
        "price": 178799,
        "excl": 155477
      },
      {
        "trim": "1.0L ZEN",
        "price": 199999,
        "excl": 173912
      },
      {
        "trim": "1.0L ZEN AMT",
        "price": 209999,
        "excl": 182608
      },
      {
        "trim": "1.0L CLIMBER",
        "price": 212999,
        "excl": 185217
      },
      {
        "trim": "1.0L CLIMBER AMT",
        "price": 222999,
        "excl": 193912
      }
    ],
    "key_selling_points": [
      "The Kwid gives you genuine SUV styling - raised ride height, bold grille, LED daytime running lights and 180mm ground clearance - at an entry-level price that makes it one of the most affordable ways to stand out on South African roads.",
      "Boot space of 279 litres that expands to a class-leading 620 litres means you can pack for a weekend away, a school run or a shopping trip without compromise - no other car in this segment gives you that much space.",
      "The 8-inch MediaNav touchscreen with Apple CarPlay and Android Auto keeps your music, navigation and calls seamlessly integrated with your smartphone, so you stay connected without taking your eyes off the road.",
      "With a combined fuel consumption from just 4.4 litres per 100km, the Kwid is one of the most cost-efficient cars on the market - ideal for beating rising fuel prices on your daily commute."
    ],
    "target": {
      "description": "First-time car buyers, young urban professionals and small families seeking an affordable, stylish and feature-rich entry-level vehicle",
      "lifestyle": "Urban commuters and young couples who want SUV presence, modern technology and practicality without the cost of a traditional SUV",
      "positioning": "Value-for-money entry-level crossover hatchback with authentic SUV styling, best-in-class boot space and next-generation infotainment - positioned as the most feature-packed and design-forward car in the A-segment"
    }
  },
  "Renault::TRAFIC": {
    "brand": "Renault",
    "model": "TRAFIC",
    "category": "bakkie",
    "variants": [
      "PANEL VAN"
    ],
    "engine": {
      "displacement_cc": 1997,
      "fuel": "Diesel",
      "max_power_kw": 125,
      "max_torque_nm": 380,
      "fuel_consumption": {
        "combined_l_per_100km": 7.2
      }
    },
    "transmission": [
      "6-speed Manual"
    ],
    "transmission_by_variant": {
      "All variants": "Manual"
    },
    "dimensions": {
      "length": 5480,
      "width": 2283,
      "height": 1967,
      "wheelbase": 3498,
      "ground_clearance": 160,
      "doors": 4,
      "drive": null
    },
    "capacities": {
      "seating": 3,
      "boot_litres": 8900,
      "fuel_tank": 80
    },
    "weights": {
      "kerb_kg": 1646
    },
    "safety_standard": [
      "Dual Airbags - driver, front passenger",
      "ABS + EBA + ESP",
      "Rear Park Distance Sensors",
      "Seat belt reminder",
      "Speed sensing door lock",
      "Zonal Locking System"
    ],
    "safety_variants": {},
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Disc",
      "front_susp": "Mac Pherson strut with lower triangle and coil spring",
      "tyres": "215/65 R16",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Full LED headlights with C-shaped brand lights",
        "Left-hand panelled sliding side door",
        "180° panelled rear doors",
        "Graphite grain-effect radiator grille"
      ],
      "wheels": {
        "All variants": "16” steel wheels with “mini” hubcaps"
      }
    },
    "interior": {
      "ac": "Manual air conditioning",
      "upholstery": "Fabric",
      "steering": "Height and depth adjustable"
    },
    "infotainment": {
      "all_variants": {
        "head_unit": "New R&Go DAB radio",
        "bluetooth": true,
        "USB": true,
        "AUX": true,
        "speakers": 2
      }
    },
    "warranty": {
      "comprehensive": "5 Year / 150 000km mechanical warranty",
      "body_corrosion": "5 Year anti-corrosion warranty",
      "note": null
    },
    "service_plan": {
      "duration": "5 Year / 90 000km service plan",
      "interval": "15 000km service intervals",
      "includes": [],
      "excludes": []
    },
    "colours": [
      "Blue Cumulus",
      "Ice White"
    ],
    "pricing": [
      {
        "trim": "Panel Van 2.0L dCi",
        "price": 635999,
        "excl": 553043
      }
    ],
    "key_selling_points": [
      "Innovating at every level with a dynamic profile and a record loading length of 4.15m.",
      "State-of-the-art mobile office with a folding central seat workstation and 88.3L of cabin storage.",
      "Powerful 125kW turbo diesel engine providing high torque and impressive 7.2L/100km efficiency.",
      "Specially designed for professionals with a loading volume of up to 8.9 m3 and 18 anchoring points."
    ],
    "target": {
      "description": "Professionals and businesses needing a large, versatile, and efficient work van",
      "lifestyle": "Focused on productivity and business efficiency with a need for a mobile office",
      "positioning": "A high-capacity, professional van innovating at every level to handle anything your business requires"
    }
  },
  "Renault::Triber": {
    "brand": "Renault",
    "model": "Triber",
    "category": "mpv",
    "variants": [
      "LIFE",
      "ZEN",
      "INTENS",
      "INTENS AMT"
    ],
    "engine": {
      "displacement_cc": 999,
      "fuel": "Unleaded",
      "max_power_kw": 52,
      "max_torque_nm": 96,
      "fuel_consumption": {
        "combined_l_per_100km": 5.5
      }
    },
    "transmission": [
      "5-Speed Manual",
      "5-Speed EASY-R AMT"
    ],
    "transmission_by_variant": {
      "LIFE": "Manual",
      "ZEN": "Manual",
      "INTENS": "Manual",
      "INTENS AMT": "Automatic AMT"
    },
    "dimensions": {
      "length": 3990,
      "width": 1739,
      "height": 1662,
      "wheelbase": 2636,
      "ground_clearance": 182,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 7,
      "boot_litres": 625,
      "fuel_tank": 40
    },
    "weights": {
      "kerb_kg": 926
    },
    "safety_standard": [
      "Dual Airbags - driver and front passenger",
      "ABS and EBD",
      "Seat belt reminder - driver and front passenger",
      "Speed sensing door lock",
      "Impact sensing unlock",
      "1st, 2nd and 3rd row seat belts"
    ],
    "safety_variants": {
      "INTENS": [
        "Front side airbags",
        "Reverse parking camera with guidelines"
      ]
    },
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Drum",
      "front_susp": "Mac Pherson strut with lower triangle and coil spring",
      "tyres": "165/80 R14 (Life, Zen) / 185/65 R15 (Intens)",
      "platform": "Latest generation modular platform"
    },
    "exterior": {
      "highlights": [
        "Projector headlamps",
        "Eagle beak tail lamps",
        "Longitudinal roof bars with 50kg load capacity",
        "Ground clearance of 182mm",
        "SUV skid plates"
      ],
      "wheels": {
        "LIFE": "14” Wheels with full wheel covers",
        "ZEN": "14” Wheels with full wheel covers",
        "INTENS": "15” Flex wheels"
      }
    },
    "interior": {
      "ac": "Aircon independent control 1st row and 2nd row, Aircon 2nd and 3rd row vents (Zen, Intens)",
      "upholstery": "Fabric (Life), Japda fabric (Zen), 3D Spacer fabric (Intens)",
      "steering": "Steering wheel leather wrap insert"
    },
    "infotainment": {
      "LIFE": {
        "head_unit": "R&Go® radio",
        "speakers": 2,
        "bluetooth": true,
        "USB": true,
        "AUX": true
      },
      "ZEN": {
        "head_unit": "8\" MediaNav Evolution Touchscreen",
        "speakers": 4,
        "apple_carplay": true,
        "android_auto": true,
        "bluetooth": true,
        "USB": true
      },
      "INTENS": {
        "head_unit": "8\" MediaNav Evolution Touchscreen",
        "speakers": 4,
        "tweeters": 2,
        "apple_carplay": true,
        "android_auto": true,
        "bluetooth": true,
        "USB": true
      }
    },
    "warranty": {
      "comprehensive": "5 Year / 150 000km Warranty",
      "body_corrosion": "5 Year anti-corrosion warranty",
      "note": "Warranty does not cover wear and tear items"
    },
    "service_plan": {
      "duration": "2 Year / 30 000km service plan",
      "interval": "15 000km service intervals",
      "includes": [],
      "excludes": [
        "wear and tear items"
      ]
    },
    "colours": [
      "ICE COOL WHITE",
      "MOONLIGHT SILVER",
      "ELECTRIC BLUE",
      "HONEY YELLOW",
      "FIERY RED",
      "CEDAR BROWN"
    ],
    "pricing": [
      {
        "trim": "1.0L LIFE",
        "price": 228999,
        "excl": 199130
      },
      {
        "trim": "1.0L ZEN",
        "price": 238999,
        "excl": 207825
      },
      {
        "trim": "1.0L ZEN AMT",
        "price": 248999,
        "excl": 216521
      },
      {
        "trim": "1.0L INTENS",
        "price": 254999,
        "excl": 221738
      },
      {
        "trim": "1.0L INTENS AMT",
        "price": 264999,
        "excl": 230434
      }
    ],
    "key_selling_points": [
      "Ultra-flexible SUV-inspired vehicle with EasyFix seats transforming instantly from 5 to 7-seater.",
      "Best-in-class boot space of 625 litres in 5-seat mode, with over 100+ seating combinations.",
      "Easy-to-use 8-inch MediaNav Evolution touchscreen with Apple CarPlay and Android Auto.",
      "Equipped with a new unique platform that offers unbeatable roominess and flexibility."
    ],
    "target": {
      "description": "Families and social groups requiring a spacious and flexible vehicle",
      "lifestyle": "South Africans with ever-growing social circles, enjoying trips to a braai or long vacations",
      "positioning": "A highly versatile, ultra-flexible, and affordable 7-seater crossover"
    }
  },
  "Renault::Triber Panel Van": {
    "brand": "Renault",
    "model": "Triber Panel Van",
    "category": "mpv",
    "variants": [
      "Panel Van"
    ],
    "engine": {
      "displacement_cc": 999,
      "fuel": "Unleaded",
      "max_power_kw": 52,
      "max_torque_nm": 96,
      "fuel_consumption": {
        "combined_l_per_100km": 5.5
      }
    },
    "transmission": [
      "5-speed Manual"
    ],
    "transmission_by_variant": {
      "Panel Van": "Manual"
    },
    "dimensions": {
      "length": 3990,
      "width": 1739,
      "height": 1662,
      "wheelbase": 2636,
      "ground_clearance": 182,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 2,
      "boot_litres": 1500,
      "fuel_tank": 40
    },
    "weights": {
      "kerb_kg": 926
    },
    "safety_standard": [
      "Dual Airbags - driver and front passenger",
      "ABS and EBD",
      "Seat belt reminder",
      "Speed sensing door lock",
      "Impact sensing unlock",
      "Spare wheel"
    ],
    "safety_variants": {},
    "chassis": {
      "front_brakes": "Disc",
      "rear_brakes": "Drum",
      "front_susp": "Mac Pherson strut with lower triangle and coil spring",
      "tyres": "165/80 R14",
      "platform": "Modular platform"
    },
    "exterior": {
      "highlights": [
        "Projector headlamps",
        "Eagle beak tail lamps",
        "Ground clearance of 182mm",
        "SUV-inspired styling"
      ],
      "wheels": {
        "Panel Van": "14” Wheels with full wheel covers"
      }
    },
    "interior": {
      "ac": "Manual",
      "upholstery": "Fabric",
      "steering": "Steering wheel leather wrap insert"
    },
    "infotainment": {
      "head_unit": "R&Go radio with smartphone mount",
      "speakers": 2,
      "bluetooth": true,
      "USB": true
    },
    "warranty": {
      "comprehensive": "5 Year / 150 000km mechanical warranty",
      "body_corrosion": "5 Year anti-corrosion warranty",
      "note": null
    },
    "service_plan": {
      "duration": "2 Year / 30 000km service plan",
      "interval": "15 000km service intervals",
      "includes": [],
      "excludes": []
    },
    "colours": [
      "ICE COOL WHITE"
    ],
    "pricing": [
      {
        "trim": "1.0L EXPRESS II",
        "price": 244999,
        "excl": 213043
      }
    ],
    "key_selling_points": [
      "Ultra-flexible and spacious panel van with unbeatable roominess for its category.",
      "Responsive 1.0L Energy engine offering a perfect balance of performance and fuel economy.",
      "High ground clearance of 182mm and SUV-inspired styling for confidence on all roads.",
      "Smart cargo solutions with a flat loading floor and cooled centre console storage."
    ],
    "target": {
      "description": "Small business owners and delivery professionals needing a compact but spacious van",
      "lifestyle": "Focused on business efficiency and practical transport solutions in urban environments",
      "positioning": "A highly versatile, flexible, and affordable compact panel van"
    }
  },
  "Suzuki::Baleno": {
    "brand": "Suzuki",
    "model": "Baleno",
    "category": "crossover",
    "variants": [
      "GL",
      "GLX"
    ],
    "engine": {
      "displacement_cc": 1462,
      "fuel": "Petrol",
      "max_power_kw": 77,
      "max_torque_nm": 138,
      "fuel_consumption": {
        "combined": null
      }
    },
    "transmission": [
      "5MT",
      "4AT"
    ],
    "transmission_by_variant": {
      "GL": "5MT/4AT",
      "GLX": "5MT/4AT"
    },
    "dimensions": {
      "length": 3990,
      "width": 1745,
      "height": 1500,
      "wheelbase": 2520,
      "ground_clearance": 150,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 314,
      "fuel_tank": 37
    },
    "weights": {
      "kerb_kg": 955
    },
    "safety_standard": [
      "ABS with EBD function",
      "ESP®",
      "Hill hold control",
      "Brake assist function",
      "Parking sensors Rear",
      "Immobilizer"
    ],
    "safety_variants": {
      "GL": [
        "SRS front dual airbags"
      ],
      "GLX": [
        "SRS side airbags Front",
        "SRS curtain airbags",
        "360˚ view camera"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading and trailing",
      "front_susp": "MacPherson strut",
      "tyres": "185/65R15, 195/55R16",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Coupé-inspired shape",
        "Elaborate front grille",
        "Chrome accents",
        "3-point styled LED headlights",
        "Electromagnetic tailgate opener"
      ],
      "wheels": {
        "GL": "185/65R15 + steel wheels with full wheel cover",
        "GLX": "195/55R16 + alloy wheels (Polished)"
      }
    },
    "interior": {
      "ac": "Automatic Climate Control",
      "upholstery": "Fabric (GL) / Synthetic leather (GLX)",
      "steering": "3-spoke steering wheel Leather covered"
    },
    "infotainment": {
      "GL": {
        "head_unit": "7inch Display Audio",
        "apple_carplay": true,
        "android_auto": true,
        "rearview_camera": true,
        "speakers": 4
      },
      "GLX": {
        "head_unit": "9inch Display Audio",
        "apple_carplay": true,
        "android_auto": true,
        "360˚_view_camera": true,
        "speakers": 4,
        "tweeters": 2
      }
    },
    "warranty": {
      "comprehensive": "5-year/200 000km promotional comprehensive manufacturer’s warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "4-year/60 000km",
      "interval": "15 000km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Arctic White Pearl",
      "Grandeur Grey Pearl Metallic",
      "Opulent Red Pearl Metallic",
      "Luxe Beige Pearl Metallic",
      "Celestial Blue Pearl Metallic",
      "Midnight Black Pearl",
      "Splendid Silver Pearl Metallic"
    ],
    "pricing": [
      {
        "trim": "1.5 GL 5MT",
        "price": 266900,
        "excl": 232087
      },
      {
        "trim": "1.5 GL 4AT",
        "price": 288900,
        "excl": 251217
      },
      {
        "trim": "1.5 GLX 5MT",
        "price": 319900,
        "excl": 278174
      },
      {
        "trim": "1.5 GLX 4AT",
        "price": 339900,
        "excl": 295565
      }
    ],
    "key_selling_points": [
      "Premium urban style with expert craftsmanship and a striking coupé-inspired shape.",
      "Interior envy with high-quality workmanship, unmatched comfort, and advanced display technology.",
      "Stay informed with the new-generation Head Up Display and a 9-inch HD touchscreen infotainment system.",
      "Confident and safe parking with the 360-degree view camera system on GLX models."
    ],
    "target": {
      "description": "Drivers who value premium style, advanced technology, and world-class comfort",
      "lifestyle": "Modern urban professionals who want to arrive in style while enjoying a world-class driving experience",
      "positioning": "A premium, technologically advanced hatchback that sets the standard for its class"
    }
  },
  "Suzuki::Celerio": {
    "brand": "Suzuki",
    "model": "Celerio",
    "category": "hatchback",
    "variants": [
      "GA",
      "GL"
    ],
    "engine": {
      "displacement_cc": 998,
      "fuel": "Petrol",
      "max_power_kw": 49,
      "max_torque_nm": 89,
      "fuel_consumption": {
        "MT": 4.4,
        "AMT": 4.2
      }
    },
    "transmission": [
      "5MT",
      "AMT"
    ],
    "transmission_by_variant": {
      "GA": "5MT",
      "GL": "5MT/AMT"
    },
    "dimensions": {
      "length": 3695,
      "width": 1655,
      "height": 1555,
      "wheelbase": 2435,
      "ground_clearance": 170,
      "doors": 5,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 295,
      "fuel_tank": 32
    },
    "weights": {
      "kerb_kg": 805
    },
    "safety_standard": [
      "ABS with EBD and BA",
      "ESP®",
      "Engine Auto Stop Start system",
      "Parking sensors Rear",
      "SRS front dual airbags",
      "Front: 3-point ELR seatbelts with pretensioners and force limiters"
    ],
    "safety_variants": {
      "GL AMT": [
        "Hill hold control"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading and trailing",
      "front_susp": "MacPherson strut with coil spring",
      "tyres": "165/70R14 (GA) / 175/60R15 (GL)",
      "platform": "High-rigidity, low-weight body"
    },
    "exterior": {
      "highlights": [
        "Streamlined styling in a compact shape",
        "Front grill Chrome",
        "Halogen multireflector headlamps"
      ],
      "wheels": {
        "GA": "165/70R14 + steel wheels with full wheel cover",
        "GL": "175/60R15 + alloy wheels"
      }
    },
    "interior": {
      "ac": "Manual",
      "upholstery": "Fabric",
      "steering": "3-spoke urethane steering wheel"
    },
    "infotainment": {
      "GA": {
        "head_unit": "Audio Antenna",
        "speakers": 2
      },
      "GL": {
        "head_unit": "Touchscreen Infotainment System with Bluetooth®",
        "speakers": 4,
        "apple_carplay": true,
        "android_auto": true,
        "USB": "USB port Front console"
      }
    },
    "warranty": {
      "comprehensive": "5-year/200 000km promotional comprehensive manufacturer’s warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "2-year/30 000km",
      "interval": "15 000km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Fire Red",
      "Speedy Blue Metallic",
      "Caffeine Brown Pearl",
      "Arctic White Pearl",
      "Silky Silver Metallic",
      "Glistening Grey Metallic",
      "Midnight Black Pearl"
    ],
    "pricing": [
      {
        "trim": "1.0 GA MT",
        "price": 188900,
        "excl": 164261
      },
      {
        "trim": "1.0 GL MT",
        "price": 210900,
        "excl": 183391
      },
      {
        "trim": "1.0 GL AMT",
        "price": 225900,
        "excl": 196435
      }
    ],
    "key_selling_points": [
      "Unmatched space with the most spacious cabin design and 295L boot space in its class.",
      "Incredible fuel efficiency of 4.2L/100km (AMT) thanks to the new-gen K10C Dualjet engine.",
      "Engine Auto Stop-Start Technology comes standard, reducing emissions and saving fuel in traffic.",
      "Comprehensive safety features including ABS with EBD and BA, dual airbags, and ESP standard on all models."
    ],
    "target": {
      "description": "Urban commuters, first-time car buyers, and small families",
      "lifestyle": "People who want a smart, spacious, and highly fuel-efficient compact car for everyday city living",
      "positioning": "A smart, safe, and incredibly fuel-efficient compact hatchback with unbeatable space"
    }
  },
  "Suzuki::Ciaz": {
    "brand": "Suzuki",
    "model": "Ciaz",
    "category": "sedan",
    "variants": [
      "GL",
      "GLX"
    ],
    "engine": {
      "displacement_cc": 1462,
      "fuel": "Petrol",
      "max_power_kw": 77,
      "max_torque_nm": 138,
      "fuel_consumption": {
        "combined": null
      }
    },
    "transmission": [
      "5MT",
      "4AT"
    ],
    "transmission_by_variant": {
      "GL": "5MT/4AT",
      "GLX": "5MT/4AT"
    },
    "dimensions": {
      "length": 4490,
      "width": 1730,
      "height": 1475,
      "wheelbase": 2650,
      "ground_clearance": null,
      "doors": 4,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 495,
      "fuel_tank": 43
    },
    "weights": {
      "kerb_kg": 1020
    },
    "safety_standard": [
      "SRS front airbag Driver & Passenger",
      "Collapsible steering column",
      "3-point ELR seatbelts with pretensioners force limiters and height adjusters",
      "Childproof rear door locks",
      "Side impact door beams",
      "ABS with EBD"
    ],
    "safety_variants": {
      "GLX": [
        "Fog lamps",
        "Automatic headlamps",
        "Reverse camera"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading and trailing",
      "front_susp": "MacPherson strut with coil spring",
      "tyres": "185/65R15 (GL) / 195/55R16 (GLX)",
      "platform": "TECT"
    },
    "exterior": {
      "highlights": [
        "Bold stance and elegant curves",
        "Projector headlamps",
        "Chrome front grille",
        "Electromagnetic luggage area opener"
      ],
      "wheels": {
        "GL": "15-inch steel wheel with full wheel cap",
        "GLX": "16-inch alloy"
      }
    },
    "interior": {
      "ac": "Manual (GL) / Automatic (GLX)",
      "upholstery": "Fabric (GL) / Genuine leather + synthetic leather (GLX)",
      "steering": "Urethane (GL) / Leather covered (GLX)"
    },
    "infotainment": {
      "GL": {
        "head_unit": "MP3/WMA compatible CD player",
        "bluetooth": true,
        "speakers": 4,
        "tweeters": 2
      },
      "GLX": {
        "head_unit": "7” touchscreen infotainment system",
        "apple_carplay": true,
        "android_auto": true,
        "mirrorlink": true,
        "reverse_camera": true
      }
    },
    "warranty": {
      "comprehensive": "5-year/200 000km promotional comprehensive manufacturer’s warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "3-year/60 000km",
      "interval": "15 000km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Stargaze Blue",
      "Sangria Red Pearl",
      "Magma Grey Metallic",
      "Snow White Pearl",
      "Premium Silver Metallic",
      "Dignity Brown Metallic",
      "Midnight Black Metallic"
    ],
    "pricing": [
      {
        "trim": "1.5 GL MT",
        "price": 294900,
        "excl": 256435
      },
      {
        "trim": "1.5 GL AT",
        "price": 311900,
        "excl": 271217
      },
      {
        "trim": "1.5 GLX MT",
        "price": 339900,
        "excl": 295565
      },
      {
        "trim": "1.5 GLX AT",
        "price": 356900,
        "excl": 310348
      }
    ],
    "key_selling_points": [
      "Bold stance and elegant style that defies norms, creating a superior aesthetic appeal.",
      "Highly efficient K15B VVT engine delivering robust performance without compromising fuel-efficiency.",
      "Refined interiors with advanced features like leather seats and automatic air conditioning on GLX models.",
      "Class-leading space and comfort for both front and rear passengers with intelligently designed utility spaces."
    ],
    "target": {
      "description": "Individuals seeking an elegant, spacious, and efficient sedan with premium features",
      "lifestyle": "Professional, value-conscious individuals who appreciate a balance of indulgence and efficiency",
      "positioning": "A traffic-stopper sedan that sets the standard for its class through aesthetics and advanced tech"
    }
  },
  "Suzuki::Dzire": {
    "brand": "Suzuki",
    "model": "Dzire",
    "category": "sedan",
    "variants": [
      "GA",
      "GL+"
    ],
    "engine": {
      "displacement_cc": 1197,
      "fuel": "Petrol",
      "max_power_kw": 60,
      "max_torque_nm": 112,
      "fuel_consumption": {
        "combined_l_per_100km": 4.4
      }
    },
    "transmission": [
      "5MT",
      "CVT"
    ],
    "transmission_by_variant": {
      "GA": "5MT",
      "GL+": "5MT/CVT"
    },
    "dimensions": {
      "length": 3995,
      "width": 1735,
      "height": 1525,
      "wheelbase": 2450,
      "ground_clearance": 145,
      "doors": 4,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 378,
      "fuel_tank": 37
    },
    "weights": {
      "kerb_kg": 935
    },
    "safety_standard": [
      "SRS front dual airbags",
      "SRS side airbags Front",
      "SRS curtain airbags",
      "ABS with EBD and BA",
      "ESP®",
      "Hill hold control"
    ],
    "safety_variants": {
      "GL+": [
        "Reverse Camera"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading & trailing",
      "front_susp": "MacPherson strut with coil spring",
      "tyres": "165/80R14, 185/65R15",
      "platform": "HEARTECT PLATFORM"
    },
    "exterior": {
      "highlights": [
        "Sharp, focused silhouette",
        "Front grille painted with chrome accent (GL+)",
        "LED rear combination lamps",
        "Electromagnetic type tailgate opener"
      ],
      "wheels": {
        "GA": "165/80R14 + steel wheels with centre cap",
        "GL+": "185/65R15 + alloy wheels with centre cap"
      }
    },
    "interior": {
      "ac": "Digital",
      "upholstery": "Fabric",
      "steering": "3-spoke steering wheel Urethane"
    },
    "infotainment": {
      "GA": {
        "head_unit": "Shark fin antenna + Front & Rear speakers + Bluetooth®"
      },
      "GL+": {
        "head_unit": "7-inch Display Audio",
        "apple_carplay": "USB and Wi-Fi",
        "android_auto": "USB and Wi-Fi",
        "rearview_camera": true
      }
    },
    "warranty": {
      "comprehensive": "5 year/200 000km promotional comprehensive manufacturer’s warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "4-year/60 000km",
      "interval": "15 000 km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "ALLURING BLUE PEARL METALLIC",
      "GALLANT RED PEARL METALLIC",
      "NUTMEG BROWN PEARL METALLIC",
      "ARCTIC WHITE PEARL",
      "SPLENDID SILVER PEARL METALLIC",
      "MAGMA GRAY METALLIC",
      "BLUISH BLACK PEARL"
    ],
    "pricing": [
      {
        "trim": "1.2 GA MT",
        "price": 229900,
        "excl": 199913
      },
      {
        "trim": "1.2 GL+ MT",
        "price": 252900,
        "excl": 219913
      },
      {
        "trim": "1.2 GL+ CVT",
        "price": 272900,
        "excl": 237304
      }
    ],
    "key_selling_points": [
      "Ambition-shaped design offering a compact sedan with genuine presence and attitude.",
      "Responsive and efficient 1.2L Z12E engine delivering 60kW and exceptional 4.4L/100km fuel economy.",
      "Smart 7-inch touchscreen infotainment system with wireless Apple CarPlay and Android Auto on GL+ models.",
      "Comprehensive safety suite with 6 airbags, ESP, Hill Hold Control, and ABS with EBD and BA standard across the range."
    ],
    "target": {
      "description": "First-time car buyers, young professionals, and new families seeking an elevated compact sedan",
      "lifestyle": "People stepping into independence and adulthood who want a car that matches their shift in career and status",
      "positioning": "A refined, responsive, and stylish compact sedan designed to move with purpose and energy"
    }
  },
  "Suzuki::Eeco": {
    "brand": "Suzuki",
    "model": "Eeco",
    "category": "mpv",
    "variants": [
      "1.2L Panel Van MT"
    ],
    "engine": {
      "displacement_cc": 1200,
      "fuel": "Petrol",
      "max_power_kw": 59,
      "max_torque_nm": 104,
      "fuel_consumption": {
        "combined_l_per_100km": 5.4
      }
    },
    "transmission": [
      "MT"
    ],
    "transmission_by_variant": {},
    "dimensions": {
      "length": null,
      "width": null,
      "height": null,
      "wheelbase": null,
      "ground_clearance": null,
      "doors": 5,
      "drive": null
    },
    "capacities": {
      "seating": 2,
      "boot_litres": null,
      "fuel_tank": null
    },
    "weights": {
      "kerb_kg": null
    },
    "safety_standard": [
      "Childproof rear door locks",
      "Side impact door beams",
      "SRS front dual airbags",
      "ABS with EBD",
      "Electronic Stability Programme (ESP)",
      "Rear parking sensors"
    ],
    "safety_variants": {},
    "chassis": {
      "front_brakes": null,
      "rear_brakes": null,
      "front_susp": null,
      "tyres": "13” Steel wheels with centre cap",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Front mud flaps",
        "Headlamp levelling device",
        "LED high-mount stop lamp",
        "Dual Sliding Doors"
      ],
      "wheels": {
        "1.2L Panel Van MT": "13” Steel wheels with centre cap"
      }
    },
    "interior": {
      "ac": "Air conditioner",
      "upholstery": null,
      "steering": null
    },
    "infotainment": {
      "Audio Antenna & 2 Speakers": true
    },
    "warranty": {
      "comprehensive": "3-year / 100 000 km mechanical warranty",
      "body_corrosion": "6-year / unlimited km body corrosion warranty",
      "note": null
    },
    "service_plan": {
      "duration": null,
      "interval": "Service intervals of 15 000 km or one year, whichever comes first",
      "includes": [],
      "excludes": []
    },
    "colours": [],
    "pricing": [
      {
        "trim": "1.2 Panel van",
        "price": 230900,
        "excl": 200783
      }
    ],
    "key_selling_points": [
      "Dual Sliding Doors for easy loading and unloading of cargo.",
      "Comprehensive safety features including Dual Front Airbags, ABS with EBD, and Electronic Stability Programme.",
      "Reliable 1.2L engine delivering 59kW of power and excellent fuel efficiency of 5.4L/100km.",
      "Comes standard with an air conditioner, rear parking sensors, and a 12V accessory socket."
    ],
    "target": {
      "description": "Small business owners and delivery drivers",
      "lifestyle": "Practical and cost-conscious individuals needing a reliable panel van",
      "positioning": "An affordable, safe, and highly functional panel van with extra value standard features"
    }
  },
  "Suzuki::Ertiga": {
    "brand": "Suzuki",
    "model": "Ertiga",
    "category": "mpv",
    "variants": [
      "GA",
      "GL"
    ],
    "engine": {
      "displacement_cc": 1462,
      "fuel": "Petrol",
      "max_power_kw": 77,
      "max_torque_nm": 138,
      "fuel_consumption": {
        "combined_l_per_100km": 6.2
      }
    },
    "transmission": [
      "5MT",
      "4AT"
    ],
    "transmission_by_variant": {
      "GA": "5MT",
      "GL": "5MT/4AT"
    },
    "dimensions": {
      "length": 4395,
      "width": 1735,
      "height": 1690,
      "wheelbase": 2740,
      "ground_clearance": 180,
      "doors": 5,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 7,
      "boot_litres": 153,
      "fuel_tank": 45
    },
    "weights": {
      "kerb_kg": 1130
    },
    "safety_standard": [
      "SRS front dual airbags",
      "ABS with EBD",
      "ISOFIX child seat anchorages x2",
      "Childproof rear door locks",
      "Side impact door beams",
      "Immobiliser"
    ],
    "safety_variants": {
      "GL": [
        "Security alarm"
      ],
      "AT models": [
        "Hill hold control"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading and trailing",
      "front_susp": "MacPherson strut with coil spring",
      "tyres": "185/65R15",
      "platform": "HEARTECT PLATFORM"
    },
    "exterior": {
      "highlights": [
        "Stylish aerodynamic styling",
        "Chrome front grille (GL)",
        "Smart side view mirrors with indicators (GL)",
        "LED rear combination lamps"
      ],
      "wheels": {
        "GA": "15-inch steel wheel with wheel cover",
        "GL": "15-inch alloy wheels"
      }
    },
    "interior": {
      "ac": "2nd row air conditioning with controls (GL)",
      "upholstery": "Fabric",
      "steering": "D-shaped steering wheel"
    },
    "infotainment": {
      "GL": {
        "head_unit": "7” touchscreen infotainment system",
        "apple_carplay": true,
        "android_auto": true,
        "mirrorlink": true,
        "reverse_camera": true,
        "speakers": 4
      }
    },
    "warranty": {
      "comprehensive": "5-year/200 000km promotional comprehensive manufacturer’s warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "4-year/60 000km",
      "interval": "15 000km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Splendid Silver",
      "Premium Oxford Blue",
      "Pearl Arctic White",
      "Metallic Magma Grey",
      "Pearl Midnight Black",
      "Premium Auburn Red",
      "Dignity Brown"
    ],
    "pricing": [
      {
        "trim": "1.5 GA MT",
        "price": 299900,
        "excl": 260783
      },
      {
        "trim": "1.5 GL MT",
        "price": 339900,
        "excl": 295565
      },
      {
        "trim": "1.5 GL AT",
        "price": 358900,
        "excl": 312087
      }
    ],
    "key_selling_points": [
      "Stylish seven-seater with a powerful and responsive 1.5L engine for the whole family.",
      "Highly versatile cabin with 50:50 split folding 3rd-row and adjustable seating combinations.",
      "Fuel-efficient performance consuming only 6.2 litres per 100km, ideal for long family trips.",
      "Integrated 7-inch infotainment system with smartphone connectivity and a reverse camera on GL models."
    ],
    "target": {
      "description": "Families and transport professionals needing a stylish and efficient 7-seater",
      "lifestyle": "Active family lifestyle involving school runs, holidays, and transporting large groups",
      "positioning": "A versatile, fuel-efficient, and affordable people-carrier where everyone’s welcome"
    }
  },
  "Suzuki::Fronx": {
    "brand": "Suzuki",
    "model": "Fronx",
    "category": "crossover",
    "variants": [
      "GL",
      "GLX"
    ],
    "engine": {
      "displacement_cc": 1462,
      "fuel": "Petrol",
      "max_power_kw": 77,
      "max_torque_nm": 138,
      "fuel_consumption": {
        "5MT": 5.5,
        "4AT": 5.7
      }
    },
    "transmission": [
      "5MT",
      "4AT"
    ],
    "transmission_by_variant": {
      "GL": "5MT/4AT",
      "GLX": "5MT/4AT"
    },
    "dimensions": {
      "length": 3995,
      "width": 1765,
      "height": 1550,
      "wheelbase": 2520,
      "ground_clearance": 170,
      "doors": 5,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 304,
      "fuel_tank": 37
    },
    "weights": {
      "kerb_kg": 1005
    },
    "safety_standard": [
      "Dual front airbags",
      "ABS with EBD function",
      "ESP®",
      "Hill hold control",
      "Parking sensors Rear",
      "ISOFIX lower anchorage x 2"
    ],
    "safety_variants": {
      "GLX": [
        "SRS side airbags",
        "SRS curtain airbags",
        "360° view camera"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading & trailing",
      "front_susp": "MacPherson strut",
      "tyres": "195/60 R16",
      "platform": "HEARTECT PLATFORM"
    },
    "exterior": {
      "highlights": [
        "Stylish coupé design",
        "Bold front and rear fascia",
        "Muscular shoulder lines",
        "Aerodynamic Design",
        "LED multi-reflector headlamps"
      ],
      "wheels": {
        "GL": "195/60 R16 + alloy wheels (Painted)",
        "GLX": "195/60 R16 + alloy wheels (Polished)"
      }
    },
    "interior": {
      "ac": "Automatic",
      "upholstery": "Fabric (GL) / Synthetic leather (GLX)",
      "steering": "Leather covered"
    },
    "infotainment": {
      "GL": {
        "head_unit": "7-inch display audio",
        "apple_carplay": true,
        "android_auto": true,
        "rearview_camera": true,
        "speakers": 4
      },
      "GLX": {
        "head_unit": "9-inch display audio",
        "apple_carplay": true,
        "android_auto": true,
        "360° view camera": true,
        "speakers": 4,
        "tweeter": 1
      }
    },
    "warranty": {
      "comprehensive": "5 year / 200 000km promotional warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "4 year / 60 000km",
      "interval": "15 000 km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Celestial Blue Pearl Metallic",
      "Lucent Orange Pearl Metallic",
      "Splendid Silver Pearl Metallic",
      "Bluish Black Pearl",
      "Grandeur Grey Pearl Metallic",
      "Arctic White Pearl",
      "Opulent Red Pearl Metallic x Bluish Black Pearl",
      "Lucent Orange Pearl Metallic x Bluish Black Pearl",
      "Splendid Silver Pearl Metallic x Bluish Black Pearl"
    ],
    "pricing": [
      {
        "trim": "1.5 GL 5MT",
        "price": 298900,
        "excl": 259913
      },
      {
        "trim": "1.5 GL 4AT",
        "price": 319900,
        "excl": 278174
      },
      {
        "trim": "1.5 GLX 5MT",
        "price": 342900,
        "excl": 298174
      },
      {
        "trim": "1.5 GLX 4AT",
        "price": 362900,
        "excl": 315565
      }
    ],
    "key_selling_points": [
      "Arresting styling with a stylish coupé design that strikes a commanding presence on the road.",
      "Powerful 1.5-litre K15B engine delivering a spirited performance for both city and outdoor driving.",
      "Built on the lighter and highly rigid HEARTECT platform for enhanced fundamental vehicle performance.",
      "Advanced intuitive tech featuring a 9-inch infotainment system, 360° view camera, and Head-Up Display."
    ],
    "target": {
      "description": "Fearless individuals shaping their own path in life with attitude and style",
      "lifestyle": "Modern, adventurous lifestyle requiring a crossover SUV that excels in city driving and outdoor adventuring",
      "positioning": "The 'Next Frontier' of crossover SUVs, offering unique coupé styling and arresting presence"
    }
  },
  "Suzuki::Grand Vitara": {
    "brand": "Suzuki",
    "model": "Grand Vitara",
    "category": "suv",
    "variants": [
      "GL",
      "GLX",
      "GLX HYBRID ALLGRIP"
    ],
    "engine": {
      "displacement_cc": 1462,
      "fuel": "Petrol",
      "max_power_kw": 77,
      "max_torque_nm": 138,
      "fuel_consumption": {
        "GLX HYBRID ALLGRIP": 5.6,
        "non-hybrid models average": 6
      }
    },
    "transmission": [
      "5MT",
      "4AT",
      "6AT"
    ],
    "transmission_by_variant": {
      "GL": "5MT/4AT",
      "GLX": "5MT/4AT",
      "GLX HYBRID ALLGRIP": "6AT"
    },
    "dimensions": {
      "length": 4345,
      "width": 1795,
      "height": 1645,
      "wheelbase": 2600,
      "ground_clearance": 210,
      "doors": 5,
      "drive": "2WD/4WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 310,
      "fuel_tank": 45
    },
    "weights": {
      "kerb_kg": 1145
    },
    "safety_standard": [
      "SRS front dual airbags",
      "SRS side airbags",
      "SRS curtain airbags",
      "Front: 3-point ELR seatbelts with pretensioner and force limiter",
      "Rear: 3-point ELR seatbelts x3",
      "ISOFIX lower anchorage x 2"
    ],
    "safety_variants": {},
    "chassis": {
      "front_brakes": null,
      "rear_brakes": null,
      "front_susp": null,
      "tyres": "215/60 R17",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "LED projector headlights with LED daytime running lights",
        "Dual-sliding panoramic glass sunroof (GLX)",
        "Front grille Chrome + paint",
        "Roof rails"
      ],
      "wheels": {
        "GL": "215/60 R17 + alloy wheels",
        "GLX": "215/60 R17 + alloy wheels (Diamond Cut)",
        "GLX HYBRID ALLGRIP": "215/60 R17 + alloy wheels (Diamond Cut)"
      }
    },
    "interior": {
      "ac": "Automatic",
      "upholstery": "Fabric (GL) / Synthetic Leather (GLX)",
      "steering": "3-spoke steering wheel Leather covered"
    },
    "infotainment": {
      "GL": {
        "head_unit": "7” touchscreen + reverse camera",
        "speakers": 4,
        "apple_carplay": true,
        "android_auto": true
      },
      "GLX": {
        "head_unit": "9” display audio + 360-view camera",
        "speakers": 4,
        "tweeters": 2,
        "apple_carplay": true,
        "android_auto": true
      }
    },
    "warranty": {
      "comprehensive": "5 year / 200 000km promotional warranty",
      "body_corrosion": "six year",
      "note": null
    },
    "service_plan": {
      "duration": "4 year / 60 000km",
      "interval": "15 000 km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Arctic White Pearl with Midnight Black Pearl Roof",
      "Arctic White Pearl",
      "Cave Black Pearl Metallic",
      "Celestial Blue Pearl Metallic",
      "Grandeur Grey Pearl Metallic",
      "Midnight Black Pearl",
      "Opulent Red Pearl Metallic with Midnight Black Pearl Roof",
      "Opulent Red Pearl Metallic",
      "Splendid Silver Pearl Metallic with Midnight Black Pearl Roof",
      "Splendid Silver Pearl Metallic"
    ],
    "pricing": [
      {
        "trim": "1.5 GL 5MT",
        "price": 358900,
        "excl": 312087
      },
      {
        "trim": "1.5 GL 4AT",
        "price": 381900,
        "excl": 332087
      },
      {
        "trim": "1.5 GLX 4AT",
        "price": 453900,
        "excl": 394696
      }
    ],
    "key_selling_points": [
      "The new Grand Vitara pays homage to its revered predecessor while embracing the cutting edge of modernity with a bold legacy design.",
      "Dual-sliding panoramic glass sunroof offers refreshing open-air drives with one of the biggest openings in its class.",
      "Stay connected with the 9-inch touchscreen infotainment system, wireless Apple CarPlay, and a wireless phone charger.",
      "ALLGRIP SELECT all-wheel drive system lets you take on any road with Auto, Sport, Snow/Mud, and Lock modes."
    ],
    "target": {
      "description": "Individuals and families seeking a premium, reliable SUV with modern features and off-road capability",
      "lifestyle": "Active lifestyles involving road trips, outdoor adventures, and family gatherings",
      "positioning": "A legendary, premium SUV offering hybrid efficiency, advanced tech, and uncompromised style"
    }
  },
  "Suzuki::Ignis": {
    "brand": "Suzuki",
    "model": "Ignis",
    "category": "crossover",
    "variants": [
      "GL",
      "GLX"
    ],
    "engine": {
      "displacement_cc": 1197,
      "fuel": "Petrol",
      "max_power_kw": 61,
      "max_torque_nm": 113,
      "fuel_consumption": {
        "5MT": 5.1,
        "5AMT": 4.9
      }
    },
    "transmission": [
      "5MT",
      "5AMT"
    ],
    "transmission_by_variant": {
      "GL": "5MT",
      "GLX": "5MT / AMT"
    },
    "dimensions": {
      "length": 3700,
      "width": 1690,
      "height": 1595,
      "wheelbase": 2435,
      "ground_clearance": 180,
      "doors": 5,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 260,
      "fuel_tank": 32
    },
    "weights": {
      "kerb_kg": 850
    },
    "safety_standard": [
      "ABS with EBD function",
      "Brake assist function",
      "SRS front dual airbags",
      "Pedal release system",
      "Front: 3-point ELR seatbelts with pretensioners, force limiters",
      "Rear: 3-point ELR seatbelts x 2, 2-point seatbelt for centre seat"
    ],
    "safety_variants": {
      "GLX": [
        "Parking sensors Rear",
        "DRL (daytime running lights) LED"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading and trailing",
      "front_susp": "MacPherson strut with coil spring",
      "tyres": "175/65R15",
      "platform": "TECT body structure"
    },
    "exterior": {
      "highlights": [
        "Broad shoulders",
        "Chunky wheels",
        "Distinctive front grille",
        "LED projector headlamps (GLX)",
        "LED DRL (GLX)"
      ],
      "wheels": {
        "GL": "175/65R15 + steel wheels with full wheel cover",
        "GLX": "175/65R15 + alloy wheels"
      }
    },
    "interior": {
      "ac": "Manual (GL) / Automatic (GLX)",
      "upholstery": "Fabric",
      "steering": "3-spoke steering wheel Urethane"
    },
    "infotainment": {
      "GL": {
        "head_unit": "MP3 compatible CD player, USB + Bluetooth®",
        "speakers": "Front speakers"
      },
      "GLX": {
        "head_unit": "7” touchscreen infotainment system",
        "apple_carplay": true,
        "android_auto": true,
        "mirrorlink": true,
        "rearview_camera": true,
        "speakers": "Front & Rear speakers + Tweeters"
      }
    },
    "warranty": {
      "comprehensive": "5yr / 200 000 km promotional manufacturer’s warranty",
      "body_corrosion": "six year",
      "note": null
    },
    "service_plan": {
      "duration": "2yr / 30 000km",
      "interval": "15 000 km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Arctic White Pearl",
      "Glistening Grey Metallic",
      "Turqouise Blue Pearl Metallic",
      "Silky Silver Metallic",
      "Midnight Black Pearl",
      "Lucent Orange & Midnight Black",
      "Stargaze Blue & Midnight Black"
    ],
    "pricing": [
      {
        "trim": "1.2 GL MT",
        "price": 237900,
        "excl": 206870
      },
      {
        "trim": "1.2 GLX MT",
        "price": 276900,
        "excl": 240783
      },
      {
        "trim": "1.2 GLX AMT",
        "price": 293900,
        "excl": 255565
      }
    ],
    "key_selling_points": [
      "Powerful and strong road presence with broad shoulders and a distinctive front grille.",
      "Efficient but powerful 1.2L engine offering paces and outstanding fuel economy of up to 4.9L/100km.",
      "7-inch touchscreen infotainment system with Apple CarPlay, Android Auto, and Mirrorlink on GLX models.",
      "Advanced safety features including ABS with EBD, TECT impact-absorbing body, and dual airbags standard across the range."
    ],
    "target": {
      "description": "Original, independent thinkers and innovators of the new generation",
      "lifestyle": "Trail-blazers who want to customise their experiences and tell their own story",
      "positioning": "An iconic, innovation-driven compact crossover that is like no other on the road"
    }
  },
  "Suzuki::Jimny": {
    "brand": "Suzuki",
    "model": "Jimny",
    "category": "suv",
    "variants": [
      "GLX"
    ],
    "engine": {
      "displacement_cc": 1462,
      "fuel": "Petrol",
      "max_power_kw": 75,
      "max_torque_nm": 130,
      "fuel_consumption": {
        "5MT": 6.3,
        "4AT": 6.8
      }
    },
    "transmission": [
      "5MT",
      "4AT"
    ],
    "transmission_by_variant": {
      "GLX": "5MT/4AT"
    },
    "dimensions": {
      "length": 3625,
      "width": 1645,
      "height": 1720,
      "wheelbase": 2250,
      "ground_clearance": 210,
      "doors": 3,
      "drive": "Allgrip Pro"
    },
    "capacities": {
      "seating": 4,
      "boot_litres": 377,
      "fuel_tank": 40
    },
    "weights": {
      "kerb_kg": 1095
    },
    "safety_standard": [
      "SRS front dual airbags",
      "Front: 3-point ELR seatbelts with pretensioners and force limiters",
      "Rear: 3-point ELR seatbelts x 2",
      "ISOFIX child seat anchorages Rear x 2",
      "Pedal Release System Brake + clutch",
      "Side impact door beams"
    ],
    "safety_variants": {
      "GLX AT": [
        "Shift lock/key interlock (AT)"
      ]
    },
    "chassis": {
      "front_brakes": "Solid disc",
      "rear_brakes": "Drum, leading and trailing",
      "front_susp": "3-link rigid axle with coil spring",
      "tyres": "195/80R15",
      "platform": "Rigid Ladder Frame Chassis"
    },
    "exterior": {
      "highlights": [
        "Practical drip rail",
        "Flat bonnet corners",
        "Optimised bumpers",
        "LED headlamps with washers",
        "Classic round LED Projector Headlights"
      ],
      "wheels": {
        "GLX": "195/80R15 + alloy wheels"
      }
    },
    "interior": {
      "ac": "Automatic climate control",
      "upholstery": "Fabric",
      "steering": "Leather covered"
    },
    "infotainment": {
      "head_unit": "7” touchscreen radio",
      "screen_size_inches": 7,
      "touchscreen": true,
      "smartphone_replication": true,
      "apple_carplay": true,
      "android_auto": true,
      "voice_command": true,
      "mirrorlink": true,
      "bluetooth": true
    },
    "warranty": {
      "comprehensive": "5-year/200 000km promotional comprehensive manufacturer’s warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "4-year/60 000km",
      "interval": "15 000km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Midnight Black Pearl",
      "Kinetic Yellow & Midnight Black Pearl",
      "Brisk Blue & Midnight Black Pearl",
      "Jungle Green",
      "Chiffon Ivory & Midnight Black Pearl",
      "Silky Silver Metallic",
      "Medium Grey",
      "White"
    ],
    "pricing": [
      {
        "trim": "1.5 GLX 5MT",
        "price": 436900,
        "excl": 379913
      },
      {
        "trim": "1.5 GLX 4AT",
        "price": 458900,
        "excl": 399043
      }
    ],
    "key_selling_points": [
      "The Jimny stays true to its small, lightweight 4WD roots, tackling terrain larger vehicles can’t with its Rigid Ladder Frame Chassis.",
      "Built for off-road durability with 3-link rigid axle suspension, ample body angles, and a 210mm ground clearance.",
      "Switch between 4WD for off-road and 2WD for fuel economy; 4L mode adds torque for tough terrain.",
      "Powered by a new, compact 1.5L engine delivering strong torque for off-road power."
    ],
    "target": {
      "description": "Off-road enthusiasts looking for a capable, lightweight 4x4",
      "lifestyle": "Adventure-seeking individuals who want a vehicle capable of exploring challenging terrains",
      "positioning": "A legendary, purpose-built mini 4WD offering uncompromised off-road ability"
    }
  },
  "Suzuki::Jimny 5-door": {
    "brand": "Suzuki",
    "model": "Jimny 5-door",
    "category": "suv",
    "variants": [
      "GL",
      "GLX"
    ],
    "engine": {
      "displacement_cc": 1462,
      "fuel": "Petrol",
      "max_power_kw": 75,
      "max_torque_nm": 130,
      "fuel_consumption": null
    },
    "transmission": [
      "5MT",
      "4AT"
    ],
    "transmission_by_variant": {
      "GL": "5MT/4AT",
      "GLX": "5MT/4AT"
    },
    "dimensions": {
      "length": 3965,
      "width": 1645,
      "height": 1720,
      "wheelbase": 2590,
      "ground_clearance": 210,
      "doors": 5,
      "drive": "AllGrip Pro"
    },
    "capacities": {
      "seating": 4,
      "boot_litres": 211,
      "fuel_tank": 40
    },
    "weights": {
      "kerb_kg": 1185
    },
    "safety_standard": [
      "SRS front dual airbags",
      "ISOFIX child seat anchorages Rear x 2",
      "Pedal Release System Brake & clutch",
      "Parking sensors Rear",
      "Side impact door beams",
      "ABS"
    ],
    "safety_variants": {
      "GLX": [
        "SRS side airbags Front",
        "SRS curtain airbags"
      ],
      "AT variants": [
        "Shift lock/key interlock"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading and trailing",
      "front_susp": "3-link rigid axle with coil spring",
      "tyres": "195/80R15",
      "platform": "High-rigidity ladder frame"
    },
    "exterior": {
      "highlights": [
        "Front grille Grey with chrome accent",
        "Drip rails",
        "Optimised bumpers",
        "Wide and tall back door opening"
      ],
      "wheels": {
        "GL": "195/80R15 + alloy wheels",
        "GLX": "195/80R15 + alloy wheels"
      }
    },
    "interior": {
      "ac": "Manual (GL) / Auto (GLX)",
      "upholstery": "Fabric",
      "steering": "3-spoke steering wheel Urethane (GL) / Leather covered (GLX)"
    },
    "infotainment": {
      "GL": {
        "head_unit": "7-inch display audio + Bluetooth® + Rearview camera",
        "screen_size_inches": 7,
        "speakers": 2,
        "rearview_camera": true
      },
      "GLX": {
        "head_unit": "9-inch display audio + Bluetooth® + Rearview camera",
        "screen_size_inches": 9,
        "speakers": 2,
        "rearview_camera": true
      }
    },
    "warranty": {
      "comprehensive": "5-year/200 000km promotional comprehensive manufacturer’s warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "4-year/60 000km",
      "interval": "15 000km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Arctic White Pearl",
      "Silky Silver Metallic",
      "Bluish Black Pearl",
      "Granite Grey Metallic",
      "Jungle Green",
      "Celestial Blue Pearl Metallic",
      "Sizzling Red Metallic + Bluish Black Pearl",
      "Kinetic Yellow + Bluish Black Pearl",
      "Chiffon Ivory Metallic + Bluish Black Pearl"
    ],
    "pricing": [
      {
        "trim": "1.5 GL 5MT",
        "price": 437900,
        "excl": 380783
      },
      {
        "trim": "1.5 GLX 5MT",
        "price": 465900,
        "excl": 405130
      },
      {
        "trim": "1.5 GLX 4AT",
        "price": 487900,
        "excl": 424261
      }
    ],
    "key_selling_points": [
      "Expanded 5-door carrying capacity and truly comfortable seating for four adults without compromising off-road ruggedness.",
      "Powered by a capable 1.5L engine generating strong torque over a wide rpm range for off-road performance.",
      "ALLGRIP PRO 4WD system with high and low-range transfer gears lets you handle all kinds of terrain.",
      "Features a High-rigidity ladder frame, ample ground clearance, and generous approach/departure angles for genuine off-road capability."
    ],
    "target": {
      "description": "Families and adventure seekers wanting an authentic off-roader with extra space",
      "lifestyle": "Outdoor enthusiasts needing extra capacity for friends, family, and gear without losing 4x4 capability",
      "positioning": "A larger, more practical 5-door version of the legendary off-road Jimny"
    }
  },
  "Suzuki::S-Presso": {
    "brand": "Suzuki",
    "model": "S-Presso",
    "category": "hatchback",
    "variants": [
      "GL",
      "GL+",
      "S-Edition"
    ],
    "engine": {
      "displacement_cc": 998,
      "fuel": "Petrol",
      "max_power_kw": 49,
      "max_torque_nm": 89,
      "fuel_consumption": {
        "AMT": 4.4,
        "MT": 4.6
      }
    },
    "transmission": [
      "5MT",
      "AGS"
    ],
    "transmission_by_variant": {
      "GL": "5MT/AMT",
      "GL+": "5MT/AMT",
      "S-Edition": "5MT/AMT"
    },
    "dimensions": {
      "length": 3565,
      "width": 1520,
      "height": 1567,
      "wheelbase": 2380,
      "ground_clearance": 181,
      "doors": 5,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 239,
      "fuel_tank": 27
    },
    "weights": {
      "kerb_kg": 765
    },
    "safety_standard": [
      "ABS",
      "ESP®",
      "SRS front dual airbags",
      "Front: 3-point ELR seatbelts with pretensioners and force limiters",
      "Rear: 3-point ELR seatbelts (side x 2) 2-point lapbelt (centre)",
      "ISOFIX lower anchorages"
    ],
    "safety_variants": {
      "All AMT": [
        "Hill hold control"
      ],
      "S-Edition": [
        "Reverse camera"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum",
      "front_susp": "MacPherson strut",
      "tyres": "165/70R14",
      "platform": "HEARTECT"
    },
    "exterior": {
      "highlights": [
        "Muscular front grille",
        "Striking front and rear bumpers",
        "Distinct headlamp and rear lamp design",
        "181mm ground clearance"
      ],
      "wheels": {
        "GL": "165/70R14 + steel wheels (full wheel cover)",
        "GL+": "165/70R14 + alloy wheels",
        "S-Edition": "165/70R14 + alloy wheels"
      }
    },
    "interior": {
      "ac": "Manual",
      "upholstery": "Vinyl + fabric",
      "steering": "3-spoke steering wheel Urethane"
    },
    "infotainment": {
      "GL": {
        "Audio Antenna": true,
        "Front speakers": "2",
        "USB Port": false
      },
      "GL+": {
        "Audio Antenna": true,
        "Front speakers": "2",
        "head_unit": "7” touchscreen radio + Bluetooth®",
        "apple_carplay": true,
        "android_auto": true,
        "USB Port Front console": true
      },
      "S-Edition": {
        "Audio Antenna": true,
        "Front speakers": "2",
        "head_unit": "9” touchscreen radio + Bluetooth®",
        "apple_carplay": true,
        "android_auto": true,
        "USB Port Front console": true,
        "Reverse camera": true
      }
    },
    "warranty": {
      "comprehensive": "5-year/200 000km promotional comprehensive manufacturer’s warranty",
      "body_corrosion": "6-year",
      "note": null
    },
    "service_plan": {
      "duration": "2-year/30 000km",
      "interval": "15 000km or one year, whichever comes first",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Sizzle Orange",
      "Starry Blue Pearl",
      "Fire Red",
      "Granite Grey Metallic",
      "Silky Silver Metallic",
      "White"
    ],
    "pricing": [
      {
        "trim": "1.0 GL MT",
        "price": 178900,
        "excl": 155565
      },
      {
        "trim": "1.0 GL AMT",
        "price": 192900,
        "excl": 167739
      },
      {
        "trim": "1.0 GL+ MT",
        "price": 189900,
        "excl": 165130
      },
      {
        "trim": "1.0 GL+ AMT",
        "price": 203900,
        "excl": 177304
      },
      {
        "trim": "1.0 S-Edition MT",
        "price": 205900,
        "excl": 179043
      },
      {
        "trim": "1.0 S-Edition AMT",
        "price": 219900,
        "excl": 191217
      }
    ],
    "key_selling_points": [
      "Bold design and robust SUV styling with 181mm ground clearance ensures you stand out on the road.",
      "Unique centre console with a trendy digital speedometer gives a futuristic look and keeps you informed.",
      "New Generation Touchscreen Infotainment System with Apple CarPlay and Android Auto keeps you connected on every drive.",
      "Spacious cabin with ample shoulder room and a 239 litre luggage compartment that expands by folding the rear seats."
    ],
    "target": {
      "description": null,
      "lifestyle": "City dwellers looking for self-expression, vibrant energy, and a zesty spirit",
      "positioning": null
    }
  },
  "Suzuki::SWIFT": {
    "brand": "Suzuki",
    "model": "SWIFT",
    "category": "hatchback",
    "variants": [
      "GL",
      "GL+",
      "GLX"
    ],
    "engine": {
      "displacement_cc": 1197,
      "fuel": "Petrol",
      "max_power_kw": 60,
      "max_torque_nm": 112,
      "fuel_consumption": {
        "MT": 4.4,
        "CVT": 4.6
      }
    },
    "transmission": [
      "5MT",
      "CVT"
    ],
    "transmission_by_variant": {
      "GL": "5MT",
      "GL+": "5MT/CVT",
      "GLX": "5MT/CVT"
    },
    "dimensions": {
      "length": 3860,
      "width": 1735,
      "height": 1520,
      "wheelbase": 2450,
      "ground_clearance": 145,
      "doors": 5,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 5,
      "boot_litres": 265,
      "fuel_tank": 37
    },
    "weights": {
      "kerb_kg": 908
    },
    "safety_standard": [
      "SRS front dual airbags",
      "SRS side airbags Front",
      "SRS curtain airbags",
      "ABS with EBD function",
      "ESP®",
      "Parking sensors Rear with alert"
    ],
    "safety_variants": {
      "GL+": [
        "Rear-view camera"
      ],
      "GLX": [
        "Rear-view camera"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading and trailing",
      "front_susp": "MacPherson strut with coil spring",
      "tyres": "165/80R14, 185/65R15",
      "platform": "HEARTECT PLATFORM"
    },
    "exterior": {
      "highlights": [
        "Rounded shoulder lines",
        "Dramatically flared fenders",
        "Oval black metallic grille",
        "Black A and B pillars",
        "LED rear combination lamps"
      ],
      "wheels": {
        "GL": "165/80R14 + steel wheels",
        "GL+": "185/65R15 + alloy wheels",
        "GLX": "185/65R15 + polished alloy wheels"
      }
    },
    "interior": {
      "ac": "Manual (GL, GL+) / Automatic (GLX)",
      "upholstery": "Black featuring a contrast between the matte base surface and the embossed pattern",
      "steering": "3-spoke steering wheel"
    },
    "infotainment": {
      "GL": {
        "head_unit": "Audio Antenna (Roof) with micro pole"
      },
      "GL+": {
        "head_unit": "7 Inch Display Audio",
        "speakers": "Front speakers x 2, Rear speakers x 2",
        "apple_carplay": true,
        "android_auto": true
      },
      "GLX": {
        "head_unit": "9 Inch Display Audio",
        "speakers": "Front speakers x 2, Rear speakers x 2, Front tweeters x 2",
        "apple_carplay": true,
        "android_auto": true
      }
    },
    "warranty": {
      "comprehensive": "5 year/200 000km promotional warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "2-year/30 000km",
      "interval": "15 000 km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "LUSTER BLUE PEARL",
      "NOVEL ORANGE PEARL",
      "MIDNIGHT BLACK PEARL",
      "ARCTIC WHITE PEARL",
      "SPLENDID SILVER PEARL",
      "MAGMA GREY METALLIC",
      "SIZZLING RED METALLIC",
      "ARCTIC WHITE PEARL AND BLACK PEARL",
      "LUSTER BLUE PEARL AND BLACK PEARL",
      "SIZZLING RED METALLIC AND BLACK PEARL"
    ],
    "pricing": [
      {
        "trim": "1.2i GL MT",
        "price": 227900,
        "excl": 198174
      },
      {
        "trim": "1.2i GL+ MT",
        "price": 249900,
        "excl": 217304
      },
      {
        "trim": "1.2i GL+ CVT",
        "price": 269900,
        "excl": 234696
      },
      {
        "trim": "1.2 GLX MT",
        "price": 275900,
        "excl": 239913
      },
      {
        "trim": "1.2 GLX CVT",
        "price": 295900,
        "excl": 257304
      }
    ],
    "key_selling_points": [
      "An aggressively playful new look with rounded shoulder lines and a distinct oval black metallic grille.",
      "Driver-oriented cockpit design that provides an immersive experience and puts controls within easy reach.",
      "A responsive and highly fuel-efficient 1.2L Z12E engine offering outstanding low-end torque and 4.4L/100km efficiency.",
      "New front and rear suspension with optimised geometry for sharper handling and dynamic performance."
    ],
    "target": {
      "description": "Young professionals and first-time car buyers looking for a fun, stylish, and efficient hatchback",
      "lifestyle": "People who enjoy an upbeat, playful driving experience in the city while staying connected",
      "positioning": "A fun-to-drive, stylish, and extremely efficient compact hatchback that brings joy to every trip"
    }
  },
  "Suzuki::Super Carry": {
    "brand": "Suzuki",
    "model": "Super Carry",
    "category": "bakkie",
    "variants": [
      "Super Carry"
    ],
    "engine": {
      "displacement_cc": 1197,
      "fuel": "Petrol",
      "max_power_kw": 59,
      "max_torque_nm": 104,
      "fuel_consumption": null
    },
    "transmission": [
      "5MT"
    ],
    "transmission_by_variant": {},
    "dimensions": {
      "length": 3800,
      "width": 1562,
      "height": 1883,
      "wheelbase": 2110,
      "ground_clearance": 175,
      "doors": 2,
      "drive": null
    },
    "capacities": {
      "seating": 2,
      "boot_litres": null,
      "fuel_tank": 30
    },
    "weights": {
      "kerb_kg": 850
    },
    "safety_standard": [],
    "safety_variants": {},
    "chassis": {
      "front_brakes": "Ventilated Disc (13 inch)",
      "rear_brakes": "Drum, Leading & Trailing",
      "front_susp": "MacPherson Strut with Coil Spring",
      "tyres": "155R13LT8PR",
      "platform": null
    },
    "exterior": {
      "highlights": [
        "Tailgate Opening Functions",
        "Rope Hooks Tailgate x3",
        "Side Panels x8 (one side x4)",
        "Mud Flaps Front",
        "Removable bed to allow for other body options"
      ],
      "wheels": {
        "Super Carry": "Steel Wheels with Centre Cap 155R13LT8PR"
      }
    },
    "interior": {
      "ac": null,
      "upholstery": null,
      "steering": "3 Spoke Steering Wheel"
    },
    "infotainment": {},
    "warranty": {
      "comprehensive": "3-year/100 000km comprehensive manufacturer’s warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": null,
      "interval": "15 000km or one year",
      "includes": [],
      "excludes": []
    },
    "colours": [],
    "pricing": [
      {
        "trim": "1.2 PICK UP 5MT",
        "price": 196900,
        "excl": 171217
      }
    ],
    "key_selling_points": [
      "Dependable 11th generation commercial vehicle designed for reliability, cost-effectiveness, and no-frills functionality.",
      "Strong, built-to-last petrol-driven power with a 750kg load-capacity.",
      "Load box that is the widest in its class with a removable bed for other body options.",
      "Ease of use with a 4.3m turning radius and ground clearance of 175mm, easy to manoeuvre in any situation."
    ],
    "target": {
      "description": "Small and medium business owners needing a reliable delivery vehicle",
      "lifestyle": "Hardworking individuals who need a dependable business partner to get the job done",
      "positioning": "A trustworthy, cost-effective, and highly functional light commercial vehicle built to last"
    }
  },
  "Suzuki::XL6": {
    "brand": "Suzuki",
    "model": "XL6",
    "category": "mpv",
    "variants": [
      "GL",
      "GLX"
    ],
    "engine": {
      "displacement_cc": 1462,
      "fuel": "Petrol",
      "max_power_kw": 77,
      "max_torque_nm": 138,
      "fuel_consumption": {
        "combined_l_per_100km": 6
      }
    },
    "transmission": [
      "5MT",
      "4AT"
    ],
    "transmission_by_variant": {
      "GL": "5MT/4AT",
      "GLX": "5MT/4AT"
    },
    "dimensions": {
      "length": 4445,
      "width": 1775,
      "height": 1720,
      "wheelbase": 2740,
      "ground_clearance": 180,
      "doors": 5,
      "drive": "2WD"
    },
    "capacities": {
      "seating": 6,
      "boot_litres": 209,
      "fuel_tank": 45
    },
    "weights": {
      "kerb_kg": 1165
    },
    "safety_standard": [
      "SRS front dual airbags",
      "ISOFIX child seat anchorages x 2",
      "Childproof rear door locks",
      "Side impact door beams",
      "ABS with EBD function",
      "ESP®"
    ],
    "safety_variants": {
      "AT models": [
        "Hill hold control"
      ]
    },
    "chassis": {
      "front_brakes": "Ventilated disc",
      "rear_brakes": "Drum, leading & trailing",
      "front_susp": "MacPherson strut with coil spring",
      "tyres": "185/65R15",
      "platform": "HEARTECT"
    },
    "exterior": {
      "highlights": [
        "Commanding front grille",
        "Protective front, rear, and side skid plates",
        "Wheel arch cladding",
        "Front fender garnish",
        "LED headlamps and taillamps"
      ],
      "wheels": {
        "All variants": "15” polished alloy wheels"
      }
    },
    "interior": {
      "ac": "Front automatic, Rear manual",
      "upholstery": "Cloth and leather combination (GL) / Synthetic leather (GLX)",
      "steering": "Urethane (GL) / Leather covered (GLX)"
    },
    "infotainment": {
      "all_variants": {
        "head_unit": "7” Touchscreen radio",
        "apple_carplay": "Wireless",
        "android_auto": "Standard",
        "bluetooth": true,
        "reverse_camera": true,
        "speakers": "Front speakers x 2, Rear speakers x 2, Front tweeters x 2"
      }
    },
    "warranty": {
      "comprehensive": "5 year/200 000km promotional warranty",
      "body_corrosion": "six-year",
      "note": null
    },
    "service_plan": {
      "duration": "4 year/60 000km",
      "interval": "15 000 km or one year",
      "includes": [
        "replacement of oil",
        "oil filter",
        "fuel filter",
        "brake fluid",
        "air filter",
        "accessory belts"
      ],
      "excludes": [
        "tyres",
        "brakes",
        "other wear-and-tear items"
      ]
    },
    "colours": [
      "Splendid Silver Pearl Metallic",
      "Arctic White Pearl",
      "Opulent Red Pearl Metallic",
      "Grandeur Grey Pearl Metallic",
      "Celestial Blue Pearl Metallic",
      "Splendid Silver Pearl Metallic x Midnight Black Pearl",
      "Opulent Red Pearl Metallic x Midnight Black Pearl"
    ],
    "pricing": [
      {
        "trim": "1.5 GL 5MT",
        "price": 357900,
        "excl": 311217
      },
      {
        "trim": "1.5 GL 4AT",
        "price": 376900,
        "excl": 327739
      },
      {
        "trim": "1.5 GLX 5MT",
        "price": 374900,
        "excl": 326000
      },
      {
        "trim": "1.5 GLX 4AT",
        "price": 393900,
        "excl": 342522
      }
    ],
    "key_selling_points": [
      "Commanding presence and stylish SUV appeal that turns heads on the road.",
      "Spacious six-seater configuration with first-class Captain seats in the second row.",
      "Responsive 1.5-litre engine delivering robust power and impressive fuel efficiency of 6.0L/100km.",
      "7-inch touchscreen infotainment system with Wireless Apple CarPlay standard across the range."
    ],
    "target": {
      "description": "Dreamers and adventurers who think big and seek a stylish, functional 6-seater SUV",
      "lifestyle": "Active families who value comfort, space, and a premium driving experience for all passengers",
      "positioning": "A remarkable 6-seater SUV that showcases a harmonious fusion of innovation, elegance, and functionality"
    }
  }
};

// Pricing lookup table (brand → model → [variants])
const vehicleData = {
  "GAC MOTOR": {
    "GS3 Emzoom": [
      {
        "v": "1.5T Comfort MT",
        "p": 289999
      },
      {
        "v": "1.5T Comfort DCT",
        "p": 309999
      },
      {
        "v": "1.5T Elite MT",
        "p": 319999
      },
      {
        "v": "1.5T Elite DCT",
        "p": 339999
      }
    ],
    "GS8": [
      {
        "v": "2.0T Luxury 7-Seat",
        "p": 749999
      },
      {
        "v": "2.0T Elite 7-Seat",
        "p": 849999
      }
    ],
    "Emkoo": [
      {
        "v": "1.5T Comfort DCT",
        "p": 399999
      },
      {
        "v": "1.5T Elite DCT",
        "p": 459999
      }
    ],
    "M8": [
      {
        "v": "2.0T Luxury 7-Seat",
        "p": 749999
      },
      {
        "v": "2.0T Elite 7-Seat",
        "p": 849999
      }
    ]
  },
  "SUZUKI": {
    "CELERIO": [
      {
        "v": "1.0 GA MT",
        "p": 188900
      },
      {
        "v": "1.0 GL MT",
        "p": 210900
      },
      {
        "v": "1.0 GL AMT",
        "p": 225900
      }
    ],
    "SWIFT": [
      {
        "v": "1.2i GL MT",
        "p": 224900
      },
      {
        "v": "1.2i GL+ MT",
        "p": 245900
      },
      {
        "v": "1.2i GL+ CVT",
        "p": 265900
      },
      {
        "v": "1.2 GLX MT",
        "p": 271900
      },
      {
        "v": "1.2 GLX CVT",
        "p": 291900
      }
    ],
    "FRONX": [
      {
        "v": "1.5 GL 5MT",
        "p": 298900
      },
      {
        "v": "1.5 GL 4AT",
        "p": 319900
      },
      {
        "v": "1.5 GLX 5MT",
        "p": 342900
      },
      {
        "v": "1.5 GLX 4AT",
        "p": 362900
      }
    ],
    "Grand Vitara": [
      {
        "v": "1.5 GL 5MT",
        "p": 358900
      },
      {
        "v": "1.5 GL 4AT",
        "p": 381900
      },
      {
        "v": "1.5 GLX 4AT",
        "p": 453900
      }
    ],
    "JIMNY": [
      {
        "v": "1.5 GLX 5MT",
        "p": 432900
      },
      {
        "v": "1.5 GLX 4AT",
        "p": 454900
      }
    ],
    "BALENO": [
      {
        "v": "1.5 GL 5MT",
        "p": 266900
      },
      {
        "v": "1.5 GL 4AT",
        "p": 288900
      },
      {
        "v": "1.5 GLX 5MT",
        "p": 319900
      },
      {
        "v": "1.5 GLX 4AT",
        "p": 339900
      }
    ],
    "ERTIGA": [
      {
        "v": "1.5 GA MT",
        "p": 299900
      },
      {
        "v": "1.5 GL MT",
        "p": 339900
      },
      {
        "v": "1.5 GL AT",
        "p": 358900
      }
    ],
    "CIAZ": [
      {
        "v": "1.5 GL MT",
        "p": 294900
      },
      {
        "v": "1.5 GL AT",
        "p": 311900
      },
      {
        "v": "1.5 GLX MT",
        "p": 339900
      },
      {
        "v": "1.5 GLX AT",
        "p": 356900
      }
    ],
    "S-PRESSO": [
      {
        "v": "1.0 GL MT",
        "p": 178900
      },
      {
        "v": "1.0 GL AMT",
        "p": 192900
      },
      {
        "v": "1.0 GL+ MT",
        "p": 189900
      },
      {
        "v": "1.0 GL+ AMT",
        "p": 203900
      }
    ],
    "DZIRE": [
      {
        "v": "1.2 GA MT",
        "p": 224900
      },
      {
        "v": "1.2 GL+ MT",
        "p": 246900
      },
      {
        "v": "1.2 GL+ CVT",
        "p": 266900
      }
    ],
    "IGNIS": [
      {
        "v": "1.2 GL MT",
        "p": 237900
      },
      {
        "v": "1.2 GLX MT",
        "p": 276900
      },
      {
        "v": "1.2 GLX AMT",
        "p": 293900
      }
    ],
    "XL6": [
      {
        "v": "1.5 GL 5MT",
        "p": 357900
      },
      {
        "v": "1.5 GL 4AT",
        "p": 376900
      },
      {
        "v": "1.5 GLX 5MT",
        "p": 374900
      },
      {
        "v": "1.5 GLX 4AT",
        "p": 393900
      }
    ],
    "Jimny 5-door": [
      {
        "v": "1.5 GL 5MT",
        "p": 434900
      },
      {
        "v": "1.5 GLX 5MT",
        "p": 462900
      },
      {
        "v": "1.5 GLX 4AT",
        "p": 484900
      }
    ],
    "SWIFT SPORT": [
      {
        "v": "1.4 TURBO MT",
        "p": 463900
      },
      {
        "v": "1.4 TURBO AT",
        "p": 487900
      }
    ]
  },
  "MAHINDRA": {
    "XUV 3XO": [
      {
        "v": "MX2 1.2T MT",
        "p": 259999
      },
      {
        "v": "MX2 1.2T AT",
        "p": 279999
      },
      {
        "v": "MX3 1.2T MT",
        "p": 279999
      },
      {
        "v": "MX3 1.2T AT",
        "p": 300899
      },
      {
        "v": "AX5 1.2T MT",
        "p": 319999
      },
      {
        "v": "AX5 1.2T AT",
        "p": 344999
      },
      {
        "v": "AX5L 1.2T AT",
        "p": 374999
      },
      {
        "v": "AX7L 1.2T AT",
        "p": 404999
      }
    ],
    "XUV700": [
      {
        "v": "AX5 2.0T AT",
        "p": 495199
      },
      {
        "v": "AX7 2.0T AT",
        "p": 551399
      },
      {
        "v": "AX7L 2.0T AT",
        "p": 599999
      }
    ],
    "Scorpio-N": [
      {
        "v": "Z4 2.2 D AT",
        "p": 489999
      },
      {
        "v": "Z8 2.2 D AT",
        "p": 536999
      },
      {
        "v": "Z8 2.2 D 4x4 AT",
        "p": 587999
      },
      {
        "v": "Z8L 2.2 D 4x4 AT",
        "p": 665999
      }
    ],
    "Bolero": [
      {
        "v": "2.5 D Maxi Truck",
        "p": 215999
      }
    ],
    "Pik Up Single Cab": [
      {
        "v": "2.2 D S4 S/Cab",
        "p": 289249
      },
      {
        "v": "2.2 D S4 S/Cab AC",
        "p": 303549
      }
    ],
    "Thar": [
      {
        "v": "2.0T 4x4 AT",
        "p": 489999
      },
      {
        "v": "2.2 D 4x4 AT",
        "p": 519999
      }
    ],
    "Scorpio Classic": [
      {
        "v": "2.2 D S7 7-Seat",
        "p": 436999
      },
      {
        "v": "2.2 D S11 7-Seat",
        "p": 464999
      }
    ],
    "KUV100": [
      {
        "v": "1.2 G80 K6+",
        "p": 189999
      },
      {
        "v": "1.2 G80 K8",
        "p": 208999
      }
    ]
  },
  "RENAULT": {
    "Kwid": [
      {
        "v": "1.0 Xtreme",
        "p": 186900
      },
      {
        "v": "1.0 Climber",
        "p": 191900
      },
      {
        "v": "1.0 Climber AMT",
        "p": 206900
      }
    ],
    "KIGER": [
      {
        "v": "1.0 Zen MT",
        "p": 229900
      },
      {
        "v": "1.0 Zen CVT",
        "p": 249900
      },
      {
        "v": "1.0T Intens CVT",
        "p": 309900
      },
      {
        "v": "1.0T Intens EDC",
        "p": 324900
      }
    ],
    "Triber": [
      {
        "v": "1.0 Expression",
        "p": 216900
      },
      {
        "v": "1.0 Dynamique",
        "p": 235900
      },
      {
        "v": "1.0 Dynamique CVT",
        "p": 256900
      },
      {
        "v": "1.0 Prestige",
        "p": 256900
      },
      {
        "v": "1.0 Prestige CVT",
        "p": 277900
      }
    ],
    "SANDERO": [
      {
        "v": "66kW Turbo Stepway",
        "p": 289900
      }
    ],
    "Duster": [
      {
        "v": "1.5 dCi Dynamique 4x2",
        "p": 359900
      },
      {
        "v": "1.5 dCi Dynamique 4x4",
        "p": 429900
      }
    ],
    "KOLEOS": [
      {
        "v": "2.5 Dynamique 4x4",
        "p": 599900
      }
    ],
    "KANGOO": [
      {
        "v": "1.5 dCi Panel Van",
        "p": 329900
      }
    ],
    "CLIO": [
      {
        "v": "IV 66kW Turbo Expression",
        "p": 289900
      },
      {
        "v": "IV 66kW Turbo Dynamique",
        "p": 314900
      }
    ],
    "CAPTUR": [
      {
        "v": "66kW Turbo Expression",
        "p": 349900
      },
      {
        "v": "66kW Turbo Dynamique",
        "p": 379900
      }
    ],
    "ARKANA": [
      {
        "v": "1.3T Zen EDC",
        "p": 429900
      },
      {
        "v": "1.3T Intens EDC",
        "p": 469900
      }
    ]
  }
};

// Export for use in app
window.VEHICLES = VEHICLES;
window.vehicleData = vehicleData;
