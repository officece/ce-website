import React, { useState } from 'react';
import { Search, Users, Award, BookOpen, Target, Microscope, Building, FlaskConical, Computer, MapPin, Calendar, ExternalLink, ChevronRight, HardHat, Settings } from 'lucide-react';

const Specializations = () => {
  const [activeMainTab, setActiveMainTab] = useState('specializations');
  const [activeSpecialization, setActiveSpecialization] = useState('structural');

  const specializations = {
    structural: {
      title: 'Structural Engineering',
      description: 'Advanced research in structural analysis, design, and earthquake engineering with state-of-the-art testing facilities.',
      color: 'blue',
      icon: Building,
      image: '/assets/Specialization banners/Structural_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Materials Engineering Laboratory',
            equipments: [
              { name: 'Servo Compression Testing Machine', image: '/assets/Instruments/Structural/Materials/ServoCompressionTestingMachine.jpg' },
              { name: 'Fatigue Testing Machine', image: '/assets/Instruments/Structural/Materials/Fatigue.jpg' },
              { name: 'Dynamic Shear Rheometer', image: '/assets/Instruments/Structural/Materials/DynamicShear.jpg' },
              { name: 'Le-Chatelier Apparatus', image: '/assets/Instruments/Structural/Materials/LeChatlier.jpg' },
              { name: 'Wet Seiving of Fly Ash', image: '/assets/Instruments/Structural/Materials/WetSeiving.jpg' },
              { name: 'Small Size Machine Cleaner', image: '/assets/Instruments/Structural/Materials/Cleaner.jpg' },
              { name: 'Slump Test for Concretee', image: '/assets/Instruments/Structural/Materials/Slump.jpg' },
              { name: 'Concrete Permeability Test', image: '/assets/Instruments/Structural/Materials/ConcretePermeability.jpg' },
              { name: 'Pan Mixer', image: '/assets/Instruments/Structural/Materials/PanMixer.jpg' },
            ]
          },
          {
            name: 'Solid Mechanics Laboratory',
            equipments: [
               { name: 'Stress and Strain in Bending', image: '/assets/Instruments/Structural/SolidMechanics/StressStrain.png' },
              { name: 'Beam Bending Moment', image: '/assets/Instruments/Structural/SolidMechanics/BeamBending.png' },
              { name: 'Unsymmetrical Bending of Beam', image: '/assets/Instruments/Structural/SolidMechanics/UnsymmetricalBending.png' },
              { name: 'Column Test Rig', image: '/assets/Instruments/Structural/SolidMechanics/ColumnTest.png' },
            ]
          },
          // {
          //   name: 'Impact Loading Laboratory',
          //   equipments: [
          //     { name: 'Prestressing jack', image: '/assets/Instruments/Structural/Impact/Prestressing.jpg' },
          //     { name: 'Fibre sheet making kit (Vacuum Bag)', image: '/assets/Instruments/Structural/Impact/VacuumBag.jpg' },
          //     { name: 'Split Hopkinson Pressure Bar setup (Compression)', image: '/assets/Instruments/Structural/Impact/hopkinson.jpg' }
          //   ]
          // },
          // {
          //   name: 'Brick Manufacturing Laboratory',
          //   equipments: [
          //     { name: 'Brick manufacturing unit', image: '/assets/Instruments/Structural/Brick/BrickManufacturing.jpg' },
          //     { name: 'Abrasion testing machine', image: '/assets/Instruments/Structural/Brick/AbrasionTesting.jpg' },
          //     { name: 'Carbonation chamber', image: '/assets/Instruments/Structural/Brick/Carbonation.jpg' },
          //     { name: 'Freeze and thaw chamber', image: '/assets/Instruments/Structural/Brick/FreezeThaw.png' },
          //   ]
          // }
        ]
      },
      faculty: [
        <a key="f1" href="https://sustainableconstructionlab.com/" target="_blank" rel="noreferrer">Dr. Sandeep Chaudhary</a>,
        <a key="f2" href="https://people.iiti.ac.in/~abhishekrajput/" target="_blank" rel="noreferrer">Dr. Abhishek Rajput</a>,
        <a key="f3" href="https://sites.google.com/view/kaustavbakshi/home" target="_blank" rel="noreferrer">Dr. Kaustav Bakshi</a>,
        <a key="f4" href="https://sites.google.com/view/guruprakash/home?authuser=0" target="_blank" rel="noreferrer">Dr. Guru Prakash</a>,
        <a key="f5" href="https://ravinderbhattoo.github.io/" target="_blank" rel="noreferrer">Dr. Ravinder</a>,
      ]
    },
    geotechnical: {
      title: 'Geotechnical Engineering',
      description: 'Comprehensive soil mechanics, foundation engineering, and ground improvement research with modern testing equipment.',
      color: 'amber',
      icon: Microscope,
      image: '/assets/Specialization banners/Geotechnical_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Geotechnical Engineering Laboratory',
            equipments: [
              { name: 'Automatic Compaction', image: '/assets/Instruments/Geotechnical/Geotechnical/AutomaticCompaction.png' },
              { name: 'Environment Chamber', image: '/assets/Instruments/Geotechnical/Geotechnical/EnvironmentChamber.png' },
              { name: 'California Bearing Ratio Machine - 50 kN', image: '/assets/Instruments/Geotechnical/Geotechnical/CBR.png' },
              { name: 'Relative Density Apparatus', image: '/assets/Instruments/Geotechnical/Geotechnical/RelativeDensity.png' },
              { name: 'Direct Shear Machine', image: '/assets/Instruments/Geotechnical/Geotechnical/DirectShear.png' },
              { name: 'Sieve Shaker', image: '/assets/Instruments/Geotechnical/Geotechnical/SieveShaker.png' },
              { name: 'Vertical Auto Clave', image: '/assets/Instruments/Geotechnical/Geotechnical/VerticalAuto.png' },
              { name: 'Hot Air Oven', image: '/assets/Instruments/Geotechnical/Geotechnical/HotAirOven.png' },
              { name: 'Weighing Balance', image: '/assets/Instruments/Geotechnical/Geotechnical/Weighingbalance.png' },
              { name: 'Vane Shear Test', image: '/assets/Instruments/Geotechnical/Geotechnical/VaneShear.png' },
              { name: 'High Speed Starrier', image: '/assets/Instruments/Geotechnical/Geotechnical/HighSpeed.png' },
              { name: 'Plate Load Test', image: '/assets/Instruments/Geotechnical/Geotechnical/PlateLoad.png' },
              { name: 'Standard Penetration Test (SPT)', image: '/assets/Instruments/Geotechnical/Geotechnical/SPT.png' },
              { name: 'Electrical Resistivity Tomography (ERT)', image: '/assets/Instruments/Geotechnical/Geotechnical/ERT.png' },
            ]
          },
          {
            name: 'Computational Laboratory',
            equipments: [
              { name: 'Desktop PCs in Computational Lab', image: '/assets/Instruments/Geotechnical/Computational/PC.jpg' },
            ]
          },
          {
            name: 'Engineering Geology Laboratory',
            equipments: [
              { name: 'Microscope', image: '/assets/Instruments/Geotechnical/Geology/Microscope.jpg' },
              { name: 'Display Tables for Rock Samples', image: '/assets/Instruments/Geotechnical/Geology/Display.jpg' },
              { name: 'Display Tables for Mineral Samples', image: '/assets/Instruments/Geotechnical/Geology/DisplayMineral.jpg' },
              { name: 'Display Tables for 3D Geology Models', image: '/assets/Instruments/Geotechnical/Geology/Display3D.jpg' },
              { name: 'Wall Models for Different Geologic Cycles', image: '/assets/Instruments/Geotechnical/Geology/WallModels.jpg' },
            ]
          }
        ]
      },
      faculty: [
        <a key="g1" href="https://people.iiti.ac.in/~neelima.satyam/" target="_blank" rel="noreferrer">Dr. Neelima Satyam D</a>,
        <a key="g2" href="https://sites.google.com/site/lalitborana/" target="_blank" rel="noreferrer">Dr. Lalit Borana</a>,
        <a key="g3" href="https://sites.google.com/view/apsingh/bio?authuser=0" target="_blank" rel="noreferrer">Dr. Akshay Pratap Singh</a>,
        <a key="g4" href="https://sites.google.com/view/ramubaadiga/" target="_blank" rel="noreferrer">Dr. Baadiga Ramu</a>,
      ]
    },
    transportation: {
      title: 'Transportation Systems Engineering',
      description: 'Highway engineering, traffic management, and intelligent transportation systems with advanced simulation capabilities.',
      color: 'green',
      icon: Target,
      image: '/assets/Specialization banners/Transport_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Geodesy and Surveying Laboratory',
            equipments: [
              { name: 'Transit Vernier Theodolite', image: '/assets/Instruments/Transportation/Survey/TransitTheodolite.jpg' },
              { name: 'Dumpy Level', image: '/assets/Instruments/Transportation/Survey/DumpyLevel.jpg' },
              { name: 'Auto Level', image: '/assets/Instruments/Transportation/Survey/Autolevel.jpg' },
              { name: 'Plane Table', image: '/assets/Instruments/Transportation/Survey/PlaneTable.jpg' },
              { name: 'Prismatic Compass', image: '/assets/Instruments/Transportation/Survey/PrismaticCompass.jpg' },
              { name: 'Total Station', image: '/assets/Instruments/Transportation/Survey/TotalStation.jpg' },
              { name: 'DGPS', image: '/assets/Instruments/Transportation/Survey/DGPS 1.jpg' },
              { name: 'Ranging Rod', image: '/assets/Instruments/Transportation/Survey/RangingRod.jpg' },
              { name: 'Metric Chain', image: '/assets/Instruments/Transportation/Survey/MetricChain.jpg' },
              { name: 'Measuring Tapes', image: '/assets/Instruments/Transportation/Survey/MeasuringTapes.jpg' },
              { name: 'Wooden Pegs, Hammer', image: '/assets/Instruments/Transportation/Survey/WoodenPegs.jpg' },
            ]
          },
          {
            name: 'Transportation Engineering Laboratory',
            equipments: [
              { name: 'Aggregate Crushing Apparatus', image: '/assets/Instruments/Transportation/Transportation/AggregateCrushing.jpg' },
              { name: 'Aggregate Impact Apparatus', image: '/assets/Instruments/Transportation/Transportation/ImpactValue.png' },
              { name: 'Kinematic Viscosity Bath', image: '/assets/Instruments/Transportation/Transportation/KViscosity.png' },
              { name: 'Marshall Stability Test', image: '/assets/Instruments/Transportation/Transportation/Marshall.png' },
              { name: 'Los Angeles Abrasion', image: '/assets/Instruments/Transportation/Transportation/LosAngeles.jpg' },
              { name: 'Planetary Mixture', image: '/assets/Instruments/Transportation/Transportation/PlanetaryMixture.jpg' },
              { name: 'Ductility Testing', image: '/assets/Instruments/Transportation/Transportation/Ductility.jpg' },
              { name: 'Digital Ductility', image: '/assets/Instruments/Transportation/Transportation/DigitalDuctility.jpg' },
              { name: 'Cleveland Flash/Fire Point', image: '/assets/Instruments/Transportation/Transportation/Cleveland.jpg' },
              { name: 'Universal Penetrometer', image: '/assets/Instruments/Transportation/Transportation/UniversalPenetrometer.jpg' },
              { name: 'Ring and Ball Apparatus', image: '/assets/Instruments/Transportation/Transportation/RingBall.jpg' },
              { name: 'Constant Temperature Bath', image: '/assets/Instruments/Transportation/Transportation/WaterBath.png' },
              { name: 'Mastic Asphalt Tester', image: '/assets/Instruments/Transportation/Transportation/HardnessTester.png' },
              { name: 'Digital Marshall', image: '/assets/Instruments/Transportation/Transportation/DigitalMarshall.png' },
              { name: 'Marshall Compactor', image: '/assets/Instruments/Transportation/Transportation/MarshallCompactor.png' },
              { name: 'Hot Air Oven', image: '/assets/Instruments/Transportation/Transportation/HotAirOven.jpg' },
              { name: 'Rolling Thin Film Oven', image: '/assets/Instruments/Transportation/Transportation/ThinFilmOven.png' },
              { name: 'Vacuum Pycnometer', image: '/assets/Instruments/Transportation/Transportation/VacumePycnometer.jpg' },
            ]
          },
          // {
          //   name: 'NDS Laboratory',
          //   equipments: [
             
          //   ]
          // }
        ]
      },
      faculty: [
        <a key="t1" href="https://gourabsil.profiles.iiti.ac.in/" target="_blank" rel="noreferrer">Dr. Gourab Sil</a>,
        <a key="t2" href="https://priyanshsingh.com/" target="_blank" rel="noreferrer">Dr. Priyansh Singh</a>,
        <a key="t3" href="https://choudharypushpa.github.io/HumanFRSTLab/pages/team/faculty/pushpa.html" target="_blank" rel="noreferrer">Dr. Pushpa Choudhary</a>,
      ]
    },
    water: {
      title: 'Water Resources Engineering',
      description: 'Hydrology, hydraulics, and water quality management with comprehensive testing and modeling facilities.',
      color: 'cyan',
      icon: FlaskConical,
      image: '/assets/Specialization banners/Water_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Fluid Mechanics Laboratory',
            equipments: [
              { name: 'Minor Losses in Pipes', image: '/assets/Instruments/Water/FluidMechanics/MinorLosses.jpg' },
              { name: 'Major Losses in Pipes', image: '/assets/Instruments/Water/FluidMechanics/MajorLosses.jpg' },
              { name: 'Reynolds Apparatus', image: '/assets/Instruments/Water/FluidMechanics/Reynolds.jpg' },
              { name: 'Universal Base Module', image: '/assets/Instruments/Water/FluidMechanics/UniversalBase.jpg' },
              { name: 'Electrical Analogy', image: '/assets/Instruments/Water/FluidMechanics/ElectricalAnalogy.jpg' },
              { name: 'Hele-Shaw Apparatus', image: '/assets/Instruments/Water/FluidMechanics/HeleShaw.jpg' },
              { name: 'Metacentric Height', image: '/assets/Instruments/Water/FluidMechanics/Metacentric.jpg' },
              { name: 'Venturi Meter', image: '/assets/Instruments/Water/FluidMechanics/Venturi.jpg' },
              { name: 'Free Vortex Apparatus', image: '/assets/Instruments/Water/FluidMechanics/FreeVortex.jpg' },
              { name: 'Force Vortex Apparatus', image: '/assets/Instruments/Water/FluidMechanics/ForceVortex.jpg' },
            ]
          },
          {
            name: 'Hydraulics and Hydrology Laboratory',
            equipments: [
              { name: 'Multipurpose Tilting Flume', image: '/assets/Instruments/Water/Hydrology/Multipurpose.png' },
              { name: 'Pygmy Current Meter', image: '/assets/Instruments/Water/Hydrology/Pygmy.jpg' },
              { name: 'Advance Hydrology System', image: '/assets/Instruments/Water/Hydrology/AdvanceHydrology.png' },
              { name: 'Drainage and Seepage Tank', image: '/assets/Instruments/Water/Hydrology/Drainage.png' },
              { name: 'Vertical Axis Current Meter', image: '/assets/Instruments/Water/Hydrology/VerticalAxis.jpg' },
            ]
          },
          // {
          //   name: 'Glacier Laboratory',
          //   equipments: [
             
          //   ]
          // }
        ]
      },
      faculty: [
        <a key="w1" href="https://sites.google.com/view/mkg1/home" target="_blank" rel="noreferrer">Dr. Manish Kumar Goyal</a>,
        <a key="w2" href="https://sites.google.com/view/priyank2306" target="_blank" rel="noreferrer">Dr. Priyank J. Sharma</a>,
        <a key="w3" href="https://sites.google.com/view/mohdfarooqazam/home" target="_blank" rel="noreferrer">Dr. Mohd. Farooq Azam</a>,
      ]
    },
    environmental: {
      title: 'Environmental Engineering',
      description: 'Environmental monitoring, waste management, and sustainable construction with advanced analytical equipment.',
      color: 'emerald',
      icon: Award,
      image: '/assets/Specialization banners/Environmental_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Environmental Engineering Laboratory',
            equipments: [
              { name: 'Dissolved Oxygen Meter', image: '/assets/Instruments/Environment/DO.jpg'},
              { name: 'Turbidity & Chlorine Tester', image: '/assets/Instruments/Environment/Turbidity.png' },
              { name: 'Autoclave', image: '/assets/Instruments/Environment/Autoclave.png' },
              { name: 'Hot Plate', image: '/assets/Instruments/Environment/HotPlate.png' },
              { name: 'Flame Photometer', image: '/assets/Instruments/Environment/FlamePhotometer.png' },
              { name: 'Weighing Balance', image: '/assets/Instruments/Environment/WeighingBalance.png' },
              { name: 'Hot Air Oven', image: '/assets/Instruments/Environment/HotAirOven.png' },
              { name: 'TKN Nitrogen Unit', image: '/assets/Instruments/Environment/TKN.png' },
              { name: 'Muffle Furnace', image: '/assets/Instruments/Environment/MuffleFurnace.png' },
              { name: 'Incubator', image: '/assets/Instruments/Environment/MCL.png' },
              { name: 'Distillation Apparatus', image: '/assets/Instruments/Environment/DistillationApparatus.png' },
              { name: 'COD Digestion Unit', image: '/assets/Instruments/Environment/COD.jpg' },
              { name: 'Weighing Machine', image: '/assets/Instruments/Environment/WeighingMachine.jpg' },
            ]
          }
        ]
      },
      faculty: [
        <a key="e1" href="https://ashootoshmandpe.profiles.iiti.ac.in/" target="_blank" rel="noreferrer">Dr. Ashootosh Mandpe</a>,
        <a key="e2" href="https://sites.google.com/view/mayur-shirish-jain" target="_blank" rel="noreferrer">Dr. Mayur Shirish Jain</a>,
      ]
    }
  };

  const laboratoryData = [
    { name: 'Computational Laboratory', location: '1C-404(A)' },
    { name: 'Engineering Geology Laboratory', location: '1C-404(B)' },
    { name: 'Environmental Engineering Laboratory', location: '1C-402' },
    { name: 'Fluid Mechanics Laboratory', location: '1C-403(A)' },
    { name: 'Geotechnical Engineering Laboratory- I', location: '1C-102(A)' },
    { name: 'Geotechnical Engineering Laboratory- II', location: '1C-102(B)' },
    { name: 'Geodesy & Surveying Laboratory', location: '1E- 101(A)' },
    { name: 'Hydraulics and Hydrology Laboratory', location: '1C-403(B)' },
    { name: 'Materials Engineering Laboratory', location: '1C-101(A)' },
    { name: 'Solid Mechanics Laboratory', location: '1C-101(B)' },
    { name: 'Transportation Engineering Laboratory', location: '1A-103' },
    { name: 'Structure Engineering Laboratory', location: '1E- 101(B)' },
    // { name: 'Brick Manufacturing Laboratory', location: 'Near VSB Hostel' },
    // { name: 'Impact Loading Laboratory', location: 'Near Balda' },
    // { name: 'NDS Laboratory', location: 'LG-01 Carbon building' },
    // { name: 'Glacier Laboratory', location: '1C-401' },
  ].sort((a, b) => {
    const isA1C = a.location.trim().startsWith('1C');
    const isB1C = b.location.trim().startsWith('1C');
    if (isA1C && !isB1C) return -1;
    if (!isA1C && isB1C) return 1;
    return a.location.localeCompare(b.location);
  });

  const specializationKeys = Object.keys(specializations);
  const currentSpec = specializations[activeSpecialization];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', light: 'bg-blue-50' },
      amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-600', hover: 'hover:bg-amber-700', light: 'bg-amber-50' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600', hover: 'hover:bg-green-700', light: 'bg-green-50' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-600', hover: 'hover:bg-cyan-700', light: 'bg-cyan-50' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', light: 'bg-emerald-50' }
    };
    return colorMap[color]?.[type] || colorMap.blue[type];
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Research & Facilities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our core specializations and state-of-the-art laboratories
            </p>
          </div>
        </div>
      </section>

      {/* Main Tab Navigation */}
      <section className="py-6 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveMainTab('specializations')}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 flex items-center gap-2 ${activeMainTab === 'specializations' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              <Award className="h-5 w-5" /> Specializations
            </button>
            <button
              onClick={() => setActiveMainTab('laboratories')}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 flex items-center gap-2 ${activeMainTab === 'laboratories' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              <HardHat className="h-5 w-5" /> Laboratories
            </button>
          </div>
        </div>
      </section>

      {activeMainTab === 'specializations' ? (
        <>
          {/* Sub Navigation */}
          <section className="py-8 bg-gray-50 sticky top-0 z-30 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-2">
                {specializationKeys.map((key) => {
                  const spec = specializations[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSpecialization(key)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${activeSpecialization === key ? `${getColorClasses(spec.color, 'bg')} text-white shadow-lg` : `bg-white ${getColorClasses(spec.color, 'text')} ${getColorClasses(spec.color, 'border')} border hover:shadow-md`}`}
                    >
                      <spec.icon className="h-4 w-4" />
                      <span>{spec.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Specialization Content */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center space-x-3 ${getColorClasses(currentSpec.color, 'text')} mb-4`}>
                  <currentSpec.icon className="h-8 w-8" />
                  <h2 className="text-4xl font-bold text-gray-900">{currentSpec.title}</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{currentSpec.description}</p>
              </div>

              <div className="mb-16">
                <img src={currentSpec.image} alt={currentSpec.title} className="w-full h-64 md:h-80 object-cover rounded-lg shadow-xl" />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`${getColorClasses(currentSpec.color, 'bg')} text-white p-3 rounded-lg mr-4`}>
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Laboratory Facilities</h3>
                  </div>
                  <ul className="space-y-3">
                    {currentSpec.facilities.labs.map((lab, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className={`mt-2 mr-2 h-2 w-2 rounded-full ${getColorClasses(currentSpec.color, 'bg')}`} />
                        <span className="text-lg font-medium">{lab.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`${getColorClasses(currentSpec.color, 'bg')} text-white p-3 rounded-lg mr-4`}>
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Faculty Members</h3>
                  </div>
                  <div className="space-y-3">
                    {currentSpec.faculty.map((faculty, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <ChevronRight className={`h-4 w-4 mr-2 ${getColorClasses(currentSpec.color, 'text')}`} />
                        <span className="text-gray-800 font-medium">{faculty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Equipments Section */}
              <div className="border-t border-gray-200 pt-16">
                <div className="text-center mb-10">
                  <div className={`inline-flex items-center space-x-2 ${getColorClasses(currentSpec.color, 'text')} mb-2`}>
                    <Settings className="h-6 w-6" />
                    <h3 className="text-3xl font-bold text-gray-900">Research Infrastructure</h3>
                  </div>
                </div>

                <div className="space-y-12">
                  {currentSpec.facilities.labs.map((lab, labIdx) => (
                    <div key={labIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className={`${getColorClasses(currentSpec.color, 'light')} px-6 py-4 border-b border-gray-100`}>
                        <h4 className={`text-xl font-bold ${getColorClasses(currentSpec.color, 'text')}`}>{lab.name}</h4>
                      </div>
                      <div className="p-6">
                        {lab.equipments?.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {lab.equipments.map((eq, eqIdx) => (
                              <div key={eqIdx} className="group">
                                <div className="relative overflow-hidden rounded-lg shadow-md aspect-video mb-3">
                                  <img src={eq.image} alt={eq.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h5 className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">{eq.name}</h5>
                              </div>
                            ))}
                          </div>
                        ) : <p className="text-gray-500 italic">Equipment details coming soon.</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Department Laboratories</h2>
            </div>
            <div className="shadow-lg overflow-hidden border-b border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Sr. No.</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Laboratory Name</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Location</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {laboratoryData.map((lab, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{lab.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{lab.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Specializations;