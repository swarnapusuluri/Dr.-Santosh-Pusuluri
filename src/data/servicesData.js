// src/data/servicesData.js

export const services = [
  {
    id: "implants",
    name: "Dental Implants & Implantology",
    summary: "Replace missing teeth with natural-looking, permanent implants.",
    details: "State-of-the-art dental implant placement for missing teeth, offering a permanent and stable solution that looks and feels like natural teeth. Our advanced implant procedures utilize the latest techniques for precise placement and optimal healing, restoring both function and appearance. This includes comprehensive planning and execution for single or multiple implants.",
    icon: "🔩", 
    benefits: [
      "Permanent solution for tooth loss",
      "Restores chewing ability and speech",
      "Preserves jawbone structure and facial aesthetics",
      "No impact on adjacent healthy teeth",
      "High success rate and long-term durability"
    ],
    price: "Consultation Required" // Changed from fixed price
  },
  {
    id: "scaling",
    name: "Scaling & Root Planing (Deep Cleaning)",
    summary: "Deep cleaning to effectively treat gum disease and prevent progression.",
    details: "Scaling and root planing is a non-surgical procedure crucial for treating early to moderate gum disease. It meticulously removes plaque and tartar (calculus) from both above and below the gumline. Root planing then smooths the tooth root surfaces, which discourages bacteria accumulation and helps gum tissue reattach to the teeth. This procedure is key to reducing inflammation, bleeding gums, and improving overall periodontal health.",
    icon: "🧽", 
    benefits: [
      "Stops progression of gum disease",
      "Reduces gum inflammation and bleeding",
      "Eliminates bad breath caused by bacteria",
      "Prevents potential tooth loss due to gum disease",
      "Promotes healthier gum tissue reattachment"
    ],
    price: "Starting from $200 per quadrant"
  },
  {
    id: "periodontal-surgery", // Consolidated from old 'surgery' and new 'Gum Surgeries & Grafting'
    name: "Periodontal Surgery & Gum Grafting",
    summary: "Advanced surgical treatments for severe gum disease and gum recession.",
    details: "This comprehensive category includes various advanced surgical procedures designed to treat severe gum disease and correct gum recession. Procedures may include flap surgery to clean infected areas and reduce pocket depths, and soft tissue grafting to cover exposed tooth roots, reduce sensitivity, and improve gum line appearance. Our focus is on restoring the health, function, and aesthetics of your gums and the supporting bone structure.",
    icon: "🩹", 
    benefits: [
      "Effectively treats advanced gum disease",
      "Reduces deep periodontal pockets",
      "Covers exposed tooth roots to reduce sensitivity",
      "Prevents further gum recession and bone loss",
      "Improves overall gum health and smile aesthetics"
    ],
    price: "Consultation Required" // Consolidated price
  },
  {
    id: "bone-regeneration", // Consolidated from old 'bone-regeneration' and new 'Periodontal Regenerative Techniques'
    name: "Periodontal & Bone Regeneration",
    summary: "Techniques to rebuild lost bone and gum tissue caused by disease.",
    details: "Advanced regenerative techniques like Guided Tissue Regeneration (GTR) are utilized to stimulate the regrowth of bone and gum tissue lost due to periodontal disease. This procedure is vital for reinforcing the support structure of existing teeth and preparing areas for successful dental implant placement. We employ advanced biomaterials and growth factors to encourage your body's natural healing processes and rebuild lost structures for long-term oral health.",
    icon: "🦴", 
    benefits: [
      "Rebuilds lost jawbone and supporting tissue",
      "Enhances long-term prognosis for teeth",
      "Creates a stable foundation for dental implants",
      "Utilizes cutting-edge biomaterials and growth factors",
      "Minimizes the need for tooth extraction in advanced cases"
    ],
    price: "Consultation Required"
  },
  {
    id: "crown-lengthening",
    name: "Crown Lengthening",
    summary: "Reshape gum tissue and bone to expose more tooth structure.",
    details: "Crown lengthening is a precise surgical procedure to remove excess gum tissue and/or bone around a tooth. This is performed either for cosmetic reasons, to correct a 'gummy smile' and expose more of the natural tooth for a balanced aesthetic, or for functional reasons, to prepare a tooth for a crown or other restoration when there isn't enough tooth structure available.",
    icon: "👑", 
    benefits: [
      "Creates a more balanced and aesthetic smile",
      "Exposes more of the natural tooth for restorations",
      "Corrects 'gummy smile' appearance",
      "Improves oral hygiene access around teeth",
      "Enhances the longevity and fit of dental crowns"
    ],
    price: "Starting from $400 per tooth"
  },
  {
    id: "laser-periodontics", // Consolidated from old 'laser-periodontics' and new 'Laser-Assisted Periodontal Procedures'
    name: "Laser Periodontics & LANAP",
    summary: "Minimally invasive gum treatments using advanced laser technology.",
    details: "Leveraging cutting-edge laser technology, including procedures like LANAP (Laser-Assisted New Attachment Procedure), for highly precise and minimally invasive treatment of gum disease and soft tissue procedures. Lasers offer numerous advantages, including reduced bleeding, less swelling, minimal discomfort during and after treatment, and often faster healing times compared to traditional methods.",
    icon: "✨", 
    benefits: [
      "Minimally invasive and gentle on tissues",
      "Reduced pain, swelling, and bleeding",
      "Faster healing and recovery times",
      "Precise targeting of diseased tissue",
      "Promotes natural tissue regeneration"
    ],
    price: "Consultation Required" // Consolidated price
  },
  {
    id: "oral-prophylaxis", // New (broader preventive care)
    name: "Oral Prophylaxis & Preventive Care",
    summary: "Professional cleaning and personalized strategies for optimal gum health.",
    details: "Beyond basic cleaning, this service focuses on comprehensive professional dental cleaning combined with personalized preventive strategies. This includes thorough plaque and tartar removal, detailed oral hygiene instruction, fluoride treatments, and dietary counseling to help maintain optimal gum health, prevent periodontal disease, and ensure long-term oral wellness.",
    icon: "🧼", 
    benefits: [
      "Maintains excellent gum and overall oral health",
      "Prevents cavities and gum disease progression",
      "Freshens breath and brightens smile",
      "Early detection of potential oral health issues",
      "Customized home care recommendations"
    ],
    price: "Starting from $150"
  },
  {
    id: "root-canal", // New
    name: "Root Canal Treatment",
    summary: "Expert treatment to save infected teeth from extraction.",
    details: "Specialized endodontic procedures performed to treat infections and inflammation within the tooth's pulp (nerve) chamber. Root canal treatment is a vital procedure for saving severely damaged or decayed teeth from extraction, alleviating pain, and restoring the tooth's function and integrity. We ensure meticulous cleaning and sealing of the root canals to prevent re-infection.",
    icon: "💉", 
    benefits: [
      "Saves your natural tooth from extraction",
      "Effectively alleviates tooth pain and sensitivity",
      "Prevents the spread of infection to surrounding areas",
      "Restores full tooth function and aesthetics",
      "Long-lasting results with proper restoration"
    ],
    price: "Consultation Required"
  },
  {
    id: "extractions", // New
    name: "Dental Extractions",
    summary: "Safe and efficient removal of problematic teeth.",
    details: "Performed when a tooth is severely damaged, decayed beyond repair, impacted, or causing overcrowding. We prioritize patient comfort during the procedure, utilizing effective local anesthesia and gentle techniques. Post-extraction care instructions are thoroughly provided to ensure a smooth and quick recovery, and we discuss suitable options for tooth replacement.",
    icon: "🦷", 
    benefits: [
      "Relieves pain and eliminates infection source",
      "Prevents further dental complications",
      "Prepares the mouth for orthodontic treatment or implants",
      "Minimizes discomfort during the procedure",
      "Ensures optimal oral health balance"
    ],
    price: "Consultation Required"
  },
  {
    id: "restorative-dentistry", // New
    name: "Restorative Dentistry",
    summary: "Comprehensive solutions to repair damaged or missing teeth.",
    details: "A broad range of treatments focused on repairing, restoring, or replacing damaged or missing teeth to improve both oral health and aesthetics. This includes composite fillings for cavities, precise crown preparations and placements for broken or weakened teeth, and dental bridges to replace one or more missing teeth, restoring chewing efficiency, speech, and the beauty of your smile.",
    icon: "💎", 
    benefits: [
      "Repairs cavities and tooth damage",
      "Restores tooth strength, shape, and function",
      "Replaces missing teeth effectively",
      "Enhances smile aesthetics and confidence",
      "Improves chewing and speaking ability"
    ],
    price: "Consultation Required"
  },
];