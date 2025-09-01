import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Book,
  Users,
  Activity,
  Heart,
  ChevronRight,
  User,
  Calendar,
  MapPin,
  TrendingUp,
  AlertCircle,
  Microscope,
  FileText,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

const CancerInstitute = () => {
  const [selectedCategory, setSelectedCategory] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const sidebarCategories = [
    {
      id: "overview",
      name: "Cancer Overview",
      icon: <Book className="w-5 h-5" />,
    },
    {
      id: "common",
      name: "Common Cancer Types",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: "rare",
      name: "Rare Cancers",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      id: "prevention",
      name: "Prevention & Screening",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: "treatment",
      name: "Treatment Options",
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      id: "support",
      name: "Patient Support",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "research",
      name: "Research & Trials",
      icon: <Activity className="w-5 h-5" />,
    },
  ];

  const commonCancers = [
    {
      name: "Breast Cancer",
      newCases: "319,750",
      mortality: "Moderate",
      survival: "90%",
      description:
        "The most common cancer in women, also affects men. Early detection significantly improves outcomes.",
      riskFactors: ["Age", "Family history", "Gender", "Hormones"],
      screening: "Mammography recommended annually starting at age 40-50",
    },
    {
      name: "Prostate Cancer",
      newCases: "299,010",
      mortality: "Low-Moderate",
      survival: "98%",
      description:
        "Most common cancer in men. Often slow-growing with excellent survival rates when detected early.",
      riskFactors: ["Age over 65", "Family history", "Race", "Diet"],
      screening: "PSA testing and digital rectal exam",
    },
    {
      name: "Lung Cancer",
      newCases: "234,580",
      mortality: "High",
      survival: "25%",
      description:
        "Leading cause of cancer death. Strongly linked to smoking, but also affects non-smokers.",
      riskFactors: ["Smoking", "Radon exposure", "Air pollution", "Asbestos"],
      screening: "Low-dose CT scan for high-risk individuals",
    },
    {
      name: "Colorectal Cancer",
      newCases: "106,590",
      mortality: "Moderate",
      survival: "65%",
      description:
        "Cancer of the colon or rectum. Highly preventable with regular screening.",
      riskFactors: [
        "Age",
        "Diet",
        "Family history",
        "Inflammatory bowel disease",
      ],
      screening: "Colonoscopy every 10 years starting at age 45",
    },
    {
      name: "Melanoma",
      newCases: "100,640",
      mortality: "Variable",
      survival: "94%",
      description:
        "Most serious type of skin cancer. Can spread rapidly if not caught early.",
      riskFactors: ["UV exposure", "Fair skin", "Moles", "Family history"],
      screening: "Regular skin self-exams and dermatologist visits",
    },
    {
      name: "Bladder Cancer",
      newCases: "83,190",
      mortality: "Moderate",
      survival: "78%",
      description:
        "More common in men and older adults. Often detected early due to visible symptoms.",
      riskFactors: ["Smoking", "Chemical exposure", "Age", "Gender"],
      screening: "Urinalysis for high-risk individuals",
    },
  ];

  const rareCancers = [
    {
      name: "Pancreatic Cancer",
      incidence: "Low",
      mortality: "Very High",
      survival: "12%",
      description:
        "Often diagnosed at advanced stages. Aggressive form with limited treatment options.",
    },
    {
      name: "Brain & CNS Tumors",
      incidence: "Low",
      mortality: "High",
      survival: "36%",
      description:
        "Complex tumors affecting the central nervous system with varying prognoses.",
    },
    {
      name: "Ovarian Cancer",
      incidence: "Moderate",
      mortality: "High",
      survival: "50%",
      description: 'Often called "silent killer" due to subtle early symptoms.',
    },
    {
      name: "Liver Cancer",
      incidence: "Rising",
      mortality: "High",
      survival: "21%",
      description:
        "Increasing incidence often linked to hepatitis and fatty liver disease.",
    },
  ];

  const treatmentOptions = [
    {
      type: "Surgery",
      description: "Physical removal of tumors and surrounding tissue",
      suitability: "Early-stage solid tumors",
      considerations: "Recovery time, surgical risks",
    },
    {
      type: "Chemotherapy",
      description: "Drugs that target rapidly dividing cancer cells",
      suitability: "Various cancer types, often combined treatments",
      considerations: "Side effects, multiple cycles required",
    },
    {
      type: "Radiation Therapy",
      description: "High-energy rays to destroy cancer cells",
      suitability: "Localized tumors, pre/post surgery",
      considerations: "Precise targeting, potential skin effects",
    },
    {
      type: "Immunotherapy",
      description: "Helps immune system recognize and fight cancer",
      suitability: "Various advanced cancers",
      considerations: "Newer treatment, ongoing research",
    },
    {
      type: "Targeted Therapy",
      description: "Drugs targeting specific cancer cell characteristics",
      suitability: "Cancers with specific genetic markers",
      considerations: "Personalized medicine approach",
    },
    {
      type: "Hormone Therapy",
      description: "Blocks hormones that fuel certain cancers",
      suitability: "Breast and prostate cancers",
      considerations: "Long-term treatment often required",
    },
  ];

  const filteredCommonCancers = commonCancers.filter((cancer) =>
    cancer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    switch (selectedCategory) {
      case "overview":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#8e24aa] mb-6">
                Understanding Cancer
              </h1>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <p className="text-lg text-blue-800">
                  Cancer is a group of diseases characterized by the
                  uncontrolled growth and spread of abnormal cells. Cancers are
                  classified by the type of tissue in which they originate and
                  by their primary location in the body.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Activity className="w-8 h-8 text-[#8e24aa] mr-3" />
                    <h3 className="text-xl font-semibold">2025 Statistics</h3>
                  </div>
                  <p className="text-3xl font-bold text-[#8e24aa] mb-2">
                    2.0 Million
                  </p>
                  <p className="text-gray-600">New cases expected in the US</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold">Survival Rates</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-2">68%</p>
                  <p className="text-gray-600">5-year relative survival rate</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Microscope className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Cancer Types</h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-2">200+</p>
                  <p className="text-gray-600">Different types identified</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Key Cancer Facts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#8e24aa]">
                      What Causes Cancer?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Cancer is caused by genetic changes that affect three main
                      types of genes: proto-oncogenes, tumor suppressor genes,
                      and DNA repair genes.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Tobacco use (leading cause)</li>
                      <li>• Infections (viruses, bacteria)</li>
                      <li>• Radiation exposure</li>
                      <li>• Chemical exposures</li>
                      <li>• Inherited genetic mutations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#8e24aa]">
                      Prevention Strategies
                    </h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Don't use tobacco products</li>
                      <li>• Maintain a healthy weight</li>
                      <li>• Stay physically active</li>
                      <li>• Eat a healthy diet</li>
                      <li>• Limit alcohol consumption</li>
                      <li>• Protect skin from UV radiation</li>
                      <li>• Get vaccinated (HPV, Hepatitis B)</li>
                      <li>• Regular screening tests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      case "research":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#8e24aa] mb-6">
                Research & Clinical Trials
              </h1>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
                <p className="text-indigo-800">
                  Cancer research drives innovation in prevention, detection,
                  and treatment. Clinical trials are critical for evaluating new
                  therapies and improving patient outcomes.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-2xl font-bold text-[#8e24aa] mb-3">
                    Ongoing Clinical Trials
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Immunotherapy trials for advanced melanoma</li>
                    <li>
                      • CAR-T cell therapy studies for leukemia and lymphoma
                    </li>
                    <li>• Targeted therapies for lung and breast cancers</li>
                    <li>• Combination therapies (chemo + immunotherapy)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-2xl font-bold text-[#8e24aa] mb-3">
                    How to Participate
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Patients and caregivers can find clinical trials through
                    trusted registries. Always discuss with your oncologist
                    before enrolling.
                  </p>
                  <a
                    href="https://clinicaltrials.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#8e24aa] font-medium hover:underline"
                  >
                    Search Trials at ClinicalTrials.gov
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-2xl font-bold text-[#8e24aa] mb-3">
                    Recent Breakthroughs
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• mRNA cancer vaccines entering Phase II trials</li>
                    <li>• Liquid biopsy tests for early detection</li>
                    <li>• AI-driven precision oncology approaches</li>
                    <li>• Personalized medicine based on genetic profiling</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        );

      case "prevention":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-[#8e24aa] mb-6">
              Prevention & Screening
            </h1>
            <p className="text-gray-700 mb-4">
              Up to 40% of cancers are preventable through lifestyle changes and
              early screening. Awareness of risk factors and regular check-ups
              can save lives.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#8e24aa] mb-2">
                  Lifestyle Choices
                </h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Healthy diet & exercise</li>
                  <li>Avoid tobacco & limit alcohol</li>
                  <li>Protect skin from UV rays</li>
                  <li>Maintain a healthy weight</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#8e24aa] mb-2">
                  Screening Programs
                </h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Mammograms for breast cancer</li>
                  <li>Pap smears for cervical cancer</li>
                  <li>Colonoscopy for colorectal cancer</li>
                  <li>Low-dose CT scans for lung cancer (high risk)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case "common":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-[#8e24aa]">
                  Common Cancer Types
                </h1>
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search cancer types..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-800">
                  The most common cancers in the United States are breast,
                  prostate, lung, and colorectal cancers, which account for
                  almost 50% of all new cancer cases.
                </p>
              </div>

              <div className="grid gap-6">
                {filteredCommonCancers.map((cancer, index) => (
                  <motion.div
                    key={cancer.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#8e24aa] mb-3">
                            {cancer.name}
                          </h3>
                          <p className="text-gray-700 mb-4">
                            {cancer.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-600 font-medium">
                                New Cases (2025)
                              </p>
                              <p className="text-xl font-bold text-blue-800">
                                {cancer.newCases}
                              </p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                              <p className="text-sm text-green-600 font-medium">
                                5-Year Survival
                              </p>
                              <p className="text-xl font-bold text-green-800">
                                {cancer.survival}
                              </p>
                            </div>
                            <div
                              className={`p-3 rounded-lg ${
                                cancer.mortality === "Low" ||
                                cancer.mortality === "Low-Moderate"
                                  ? "bg-green-50"
                                  : cancer.mortality === "Moderate"
                                  ? "bg-yellow-50"
                                  : "bg-red-50"
                              }`}
                            >
                              <p
                                className={`text-sm font-medium ${
                                  cancer.mortality === "Low" ||
                                  cancer.mortality === "Low-Moderate"
                                    ? "text-green-600"
                                    : cancer.mortality === "Moderate"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                                }`}
                              >
                                Mortality Risk
                              </p>
                              <p
                                className={`text-xl font-bold ${
                                  cancer.mortality === "Low" ||
                                  cancer.mortality === "Low-Moderate"
                                    ? "text-green-800"
                                    : cancer.mortality === "Moderate"
                                    ? "text-yellow-800"
                                    : "text-red-800"
                                }`}
                              >
                                {cancer.mortality}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                Risk Factors:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {cancer.riskFactors.map((factor, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm"
                                  >
                                    {factor}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                Screening:
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {cancer.screening}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case "rare":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#8e24aa] mb-6">
                Rare Cancers
              </h1>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <p className="text-orange-800">
                  Rare cancers account for about 20% of all cancer diagnoses.
                  While less common, they often require specialized treatment
                  approaches and research.
                </p>
              </div>

              <div className="grid gap-6">
                {rareCancers.map((cancer, index) => (
                  <motion.div
                    key={cancer.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[#8e24aa]">
                        {cancer.name}
                      </h3>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        Rare Cancer
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{cancer.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-600 font-medium">
                          Incidence
                        </p>
                        <p className="text-lg font-bold text-blue-800">
                          {cancer.incidence}
                        </p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-600 font-medium">
                          Mortality Risk
                        </p>
                        <p className="text-lg font-bold text-red-800">
                          {cancer.mortality}
                        </p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-600 font-medium">
                          5-Year Survival
                        </p>
                        <p className="text-lg font-bold text-green-800">
                          {cancer.survival}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case "treatment":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#8e24aa] mb-6">
                Treatment Options
              </h1>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-green-800">
                  Cancer treatment has evolved significantly, with many options
                  available depending on cancer type, stage, and individual
                  factors. Treatment plans are often personalized and may
                  combine multiple approaches.
                </p>
              </div>

              <div className="grid gap-6">
                {treatmentOptions.map((treatment, index) => (
                  <motion.div
                    key={treatment.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[#8e24aa]">
                        {treatment.type}
                      </h3>
                      <Microscope className="w-8 h-8 text-[#8e24aa]" />
                    </div>
                    <p className="text-gray-700 mb-4">
                      {treatment.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Best Suited For:
                        </h4>
                        <p className="text-gray-600">{treatment.suitability}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Key Considerations:
                        </h4>
                        <p className="text-gray-600">
                          {treatment.considerations}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case "support":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#8e24aa] mb-6">
                Patient Support Resources
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-8 h-8 text-[#8e24aa] mr-3" />
                    <h3 className="text-xl font-semibold">Emergency Support</h3>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <p className="text-purple-800 text-2xl font-bold">
                      *939*101#
                    </p>
                    <p className="text-purple-600">
                      24/7 Cancer Support Helpline
                    </p>
                  </div>
                  <p className="text-gray-600">
                    Immediate assistance for cancer patients and families
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-[#8e24aa] mr-3" />
                    <h3 className="text-xl font-semibold">Support Groups</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Local cancer support groups</li>
                    <li>• Online communities and forums</li>
                    <li>• Caregiver support networks</li>
                    <li>• Survivor mentorship programs</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-8 h-8 text-[#8e24aa] mr-3" />
                    <h3 className="text-xl font-semibold">Emotional Support</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional counseling services</li>
                    <li>• Mental health resources</li>
                    <li>• Stress management programs</li>
                    <li>• Family therapy options</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="w-8 h-8 text-[#8e24aa] mr-3" />
                    <h3 className="text-xl font-semibold">
                      Educational Resources
                    </h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Treatment information guides</li>
                    <li>• Nutrition and wellness tips</li>
                    <li>• Financial assistance programs</li>
                    <li>• Insurance and legal guidance</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        );

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8e24aa] to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              National Cancer Information Center
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive, evidence-based cancer information from leading
              medical institutions. Your trusted resource for understanding,
              preventing, and treating cancer.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-80 flex-shrink-0"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 sticky top-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">
                  Cancer Information
                </h2>
              </div>
              <nav className="p-4">
                {sidebarCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-[#8e24aa] text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-3">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 ml-auto transition-transform ${
                        selectedCategory === category.id
                          ? "rotate-90 text-white"
                          : "text-gray-400"
                      }`}
                    />
                  </motion.button>
                ))}
              </nav>

              {/* Quick Contact */}
              <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                <h3 className="font-semibold text-gray-800 mb-3">Need Help?</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>*939*101#</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>support@cancer.gov</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 National Cancer Information Center. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Developed for awareness and education.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CancerInstitute;
