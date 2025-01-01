"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Product data structure
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  details?: {
    uses: string[];
    dosage?: string;
    composition?: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "Maria Rosa",
    description:
      "Protein with B-Complex, Cyproheptadine HCL & Multimineral Tonic with L-Lysine",
    image: "/images/IMG_3580.jpg",
    category: "Syrup",
    details: {
      uses: [
        "Appetite stimulation",
        "Nutritional supplementation",
        "Support for overall health and wellness",
      ],
      composition:
        "B-Complex vitamins, Cyproheptadine HCL, Multiminerals, L-Lysine",
    },
  },
  {
    id: 2,
    name: "Bella Carina",
    description:
      "Protein with B-Complex, Cyproheptadine HCL & Multimineral Tonic with L-Lysine",
    image: "/images/IMG_3581.jpg",
    category: "Syrup",
    details: {
      uses: [
        "Appetite enhancement",
        "Nutritional support",
        "Growth and development",
      ],
      composition:
        "B-Complex vitamins, Cyproheptadine HCL, Multiminerals, L-Lysine",
    },
  },
  {
    id: 3,
    name: "Pregic",
    description: "Pregabalin Capsule 75mg for nerve pain management",
    image: "/images/IMG_3584.jpg",
    category: "Capsules",
    details: {
      uses: [
        "Neuropathic pain management",
        "Nerve pain relief",
        "Nerve health support",
      ],
      dosage: "As directed by the Physician",
      composition: "Each hard gelatin capsule contains: Pregabalin USP 75mg",
    },
  },
  {
    id: 4,
    name: "Pregnaden",
    description:
      "Melatonin, Ubiquinone, Folic Acid & Vitamin D3 Capsules for pregnancy support",
    image: "/images/IMG_3586.jpg",
    category: "Capsules",
    details: {
      uses: [
        "Pregnancy support",
        "Fetal development",
        "Maternal health maintenance",
      ],
      composition: "Melatonin, Ubiquinone, Folic Acid, Vitamin D3",
    },
  },
  {
    id: 5,
    name: "Neurogenic Forte",
    description:
      "Vitamin B6, Amino Acids, Ginkgo & Magnesium for mental and cognitive function",
    image: "/images/IMG_3587.jpg",
    category: "Tablets",
    details: {
      uses: [
        "Cognitive function enhancement",
        "Mental clarity support",
        "Brain health maintenance",
      ],
      composition: "Vitamin B6, Amino Acids, Ginkgo Biloba, Magnesium",
    },
  },
  {
    id: 6,
    name: "Olasen-5",
    description: "Olanzapine Tablets BP 5mg for mental health support",
    image: "/images/IMG_3585.jpg",
    category: "Tablets",
    details: {
      uses: [
        "Mental health management",
        "Mood stabilization",
        "Antipsychotic treatment",
      ],
      dosage: "5mg as prescribed",
      composition: "Olanzapine BP 5mg",
    },
  },
  {
    id: 7,
    name: "Duloxinor",
    description: "Duloxetine Tablet 30mg for depression and anxiety management",
    image: "/images/IMG_3588.jpg",
    category: "Tablets",
    details: {
      uses: [
        "Depression treatment",
        "Anxiety management",
        "Chronic pain relief",
      ],
      dosage: "30mg as prescribed",
      composition: "Duloxetine HCL 30mg",
    },
  },
  {
    id: 8,
    name: "Setronor",
    description: "Sertraline Hydrochloride Tablets USP 50mg for mental health",
    image: "/images/IMG_3590.jpg",
    category: "Tablets",
    details: {
      uses: [
        "Depression treatment",
        "Anxiety disorder management",
        "OCD treatment",
      ],
      dosage: "50mg as prescribed",
      composition: "Sertraline Hydrochloride USP 50mg",
    },
  },
  {
    id: 9,
    name: "ITO-50",
    description:
      "Itopride Hydrochloride Tablets 50mg for gastrointestinal health",
    image: "/images/IMG_3591.jpg",
    category: "Tablets",
    details: {
      uses: [
        "Gastrointestinal motility improvement",
        "Digestive health support",
        "GERD management",
      ],
      dosage: "50mg as directed",
      composition: "Itopride Hydrochloride 50mg",
    },
  },
  {
    id: 10,
    name: "Pipetanor",
    description: "Piperacillin and Tazobactam For Injection USP 4.5gm",
    image: "/images/IMG_3592.jpg",
    category: "Injection",
    details: {
      uses: [
        "Bacterial infection treatment",
        "Severe infection management",
        "Hospital-acquired infection treatment",
      ],
      dosage: "4.5gm x 1 Vial + diluent for I.V. use only",
      composition: "Piperacillin and Tazobactam USP 4.5gm",
    },
  },
  {
    id: 11,
    name: "Ofidox",
    description: "Ofloxacin Ophthalmic Solution USP 10ml for eye infections",
    image: "/images/IMG_3603.jpg",
    category: "Eye Drops",
    details: {
      uses: ["Bacterial eye infections", "Conjunctivitis", "Corneal ulcers"],
      dosage: "As directed by the Physician",
      composition: "Ofloxacin Ophthalmic Solution USP",
    },
  },
  {
    id: 12,
    name: "Tobway",
    description:
      "Tobramycin Ophthalmic Solution USP for bacterial eye infections",
    image: "/images/IMG_3604.jpg",
    category: "Eye Drops",
    details: {
      uses: [
        "Bacterial eye infections",
        "External eye infections",
        "Post-operative infection prevention",
      ],
      dosage: "As prescribed by healthcare professional",
      composition: "Tobramycin USP",
    },
  },
  {
    id: 13,
    name: "Normerin",
    description:
      "Meropenem for Injection USP 1000mg for severe bacterial infections",
    image: "/images/IMG_3605.jpg",
    category: "Injection",
    details: {
      uses: [
        "Severe bacterial infections",
        "Hospital-acquired infections",
        "Complicated intra-abdominal infections",
      ],
      dosage: "1gm for I.V. use only",
      composition: "Meropenem USP 1000mg",
    },
  },
  {
    id: 14,
    name: "Floxone-D",
    description:
      "Ciprofloxacin & Dexamethasone Ophthalmic Solution for eye infections with inflammation",
    image: "/images/IMG_3606.jpg",
    category: "Eye Drops",
    details: {
      uses: [
        "Bacterial eye infections with inflammation",
        "Post-operative eye inflammation",
        "Inflammatory eye conditions",
      ],
      composition: "Ciprofloxacin and Dexamethasone",
    },
  },
  {
    id: 15,
    name: "Dicy",
    description: "Diclofenac Sodium Eye Drops 0.1% w/v for eye inflammation",
    image: "/images/IMG_3596.jpg",
    category: "Eye Drops",
    details: {
      uses: [
        "Eye inflammation",
        "Post-operative eye pain",
        "Prevention of miosis during surgery",
      ],
      composition: "Diclofenac Sodium 0.1% w/v",
    },
  },
  {
    id: 16,
    name: "CCE Drops",
    description:
      "Sodium Carboxymethyl Cellulose Eye Drops B.P. 0.5% w/v for dry eyes",
    image: "/images/IMG_3600.jpg",
    category: "Eye Drops",
    details: {
      uses: ["Dry eye syndrome", "Eye lubrication", "Computer vision syndrome"],
      composition: "Sodium Carboxymethyl Cellulose 0.5% w/v",
    },
  },
  {
    id: 17,
    name: "Floxone",
    description:
      "Ciprofloxacin Ophthalmic Solution USP for bacterial eye infections",
    image: "/images/IMG_3597.jpg",
    category: "Eye Drops",
    details: {
      uses: ["Bacterial eye infections", "Corneal ulcers", "Conjunctivitis"],
      composition: "Ciprofloxacin USP",
    },
  },
  {
    id: 18,
    name: "Ofidox-D",
    description:
      "Ofloxacin & Dexamethasone Ophthalmic Solution 10ml for eye infections with inflammation",
    image: "/images/IMG_3601.jpg",
    category: "Eye Drops",
    details: {
      uses: [
        "Bacterial eye infections with inflammation",
        "Post-operative eye inflammation",
        "Inflammatory eye conditions",
      ],
      dosage: "As directed by the Physician",
      composition: "Ofloxacin & Dexamethasone Ophthalmic Solution",
    },
  },
  {
    id: 19,
    name: "Pregic",
    description: "Pregabalin Capsule 75mg for nerve pain management",
    image: "/images/IMG_3584.jpg",
    category: "Capsules",
    details: {
      uses: [
        "Neuropathic pain management",
        "Nerve pain relief",
        "Nerve health support",
      ],
      dosage: "As directed by the Physician",
      composition: "Each hard gelatin capsule contains: Pregabalin USP 75mg",
    },
  },
  {
    id: 21,
    name: "Mirtanor-15",
    description: "Mirtazapine Tablets USP 15mg for depression and anxiety",
    image: "/images/IMG_3594.jpg",
    category: "Tablets",
    details: {
      uses: ["Depression treatment", "Anxiety management", "Sleep improvement"],
      dosage: "As directed by the Physician",
      composition: "Each Film Coated Tablet Contains: Mirtazapine USP 15mg",
    },
  },
];

const ITEMS_PER_PAGE = 6;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [displayedProducts, setDisplayedProducts] = useState(products);

  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory);
    setDisplayedProducts(filtered);
    setCurrentPage(1); // Reset to first page when category changes
  }, [activeCategory]);

  const totalPages = Math.ceil(displayedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = displayedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id='products'
      className='py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-[#2B3674] mb-4'>
            Our <span className='text-[#4485FD]'>Products</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Discover our range of high-quality pharmaceutical products designed
            to support your health and wellness journey.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#4485FD] text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md"
              }`}>
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          key={`${activeCategory}-${currentPage}`}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500'>
              <div className='relative h-64 bg-gradient-to-br from-blue-50 to-white overflow-hidden'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
              <div className='p-6'>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className='inline-block text-sm font-medium text-[#4485FD] mb-2 px-3 py-1 bg-blue-50 rounded-full'>
                  {product.category}
                </motion.span>
                <h3 className='text-xl font-bold text-[#2B3674] mb-2 group-hover:text-[#4485FD] transition-colors duration-300'>
                  {product.name}
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  {product.description}
                </p>
                <Button
                  onClick={() => setSelectedProduct(product)}
                  className='w-full bg-[#4485FD] hover:bg-blue-600 rounded-full group overflow-hidden relative'>
                  <span className='relative z-10'>Learn More</span>
                  <div className='absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex justify-center items-center gap-4'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#4485FD] hover:bg-blue-50"
              }`}>
              <ChevronLeft className='w-6 h-6' />
            </motion.button>

            <div className='flex items-center gap-2'>
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i + 1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-full ${
                    currentPage === i + 1
                      ? "bg-[#4485FD] text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}>
                  {i + 1}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#4485FD] hover:bg-blue-50"
              }`}>
              <ChevronRight className='w-6 h-6' />
            </motion.button>
          </motion.div>
        )}

        {/* Product Details Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={overlayVariants}>
              <motion.div
                className='bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative'
                variants={modalVariants}
                initial='hidden'
                animate='visible'
                exit='exit'>
                {/* Hero Section with Image Background */}
                <div className='relative'>
                  <div className='relative h-64 md:h-96'>
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80' />
                  </div>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedProduct(null)}
                    className='absolute top-2 right-2 md:top-4 md:right-4 p-2 hover:bg-white/10 rounded-full text-white transition-colors z-10'
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}>
                    <X className='w-5 h-5 md:w-6 md:h-6' />
                  </motion.button>

                  {/* Title and Description */}
                  <div className='absolute bottom-0 left-0 right-0 p-4 md:p-8'>
                    <motion.h3
                      className='text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}>
                      {selectedProduct.name}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}>
                      <span className='inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-medium mb-2 md:mb-3'>
                        {selectedProduct.category}
                      </span>
                      <p className='text-white/90 text-base md:text-xl leading-relaxed line-clamp-3 md:line-clamp-none'>
                        {selectedProduct.description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className='p-4 md:p-6 pt-6 md:pt-8'>
                  <motion.div
                    className='space-y-4 md:space-y-6'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}>
                    {selectedProduct.details && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}>
                          <h4 className='text-base md:text-lg font-semibold text-[#2B3674] mb-2 md:mb-3'>
                            Uses
                          </h4>
                          <ul className='grid gap-2'>
                            {selectedProduct.details.uses.map((use, index) => (
                              <motion.li
                                key={index}
                                className='flex items-center gap-3 bg-gradient-to-r from-blue-50/50 to-white p-2 md:p-3 rounded-xl text-sm md:text-base'
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}>
                                <div className='h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#4485FD]' />
                                <span className='text-gray-700'>{use}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {selectedProduct.details.composition && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className='bg-gradient-to-r from-blue-50/50 to-white p-3 md:p-4 rounded-xl'>
                            <h4 className='text-base md:text-lg font-semibold text-[#2B3674] mb-1 md:mb-2'>
                              Composition
                            </h4>
                            <p className='text-gray-600 text-sm md:text-base'>
                              {selectedProduct.details.composition}
                            </p>
                          </motion.div>
                        )}

                        {selectedProduct.details.dosage && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className='bg-gradient-to-r from-blue-50/50 to-white p-3 md:p-4 rounded-xl'>
                            <h4 className='text-base md:text-lg font-semibold text-[#2B3674] mb-1 md:mb-2'>
                              Dosage
                            </h4>
                            <p className='text-gray-600 text-sm md:text-base'>
                              {selectedProduct.details.dosage}
                            </p>
                          </motion.div>
                        )}
                      </>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}>
                    <Button
                      onClick={() => setSelectedProduct(null)}
                      className='mt-6 md:mt-8 w-full bg-[#4485FD] hover:bg-blue-600 rounded-full group overflow-hidden relative'>
                      <span className='relative z-10'>Close</span>
                      <div className='absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
