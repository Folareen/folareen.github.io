"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface Proof {
    src: string;
    alt: string;
}

export default function ProofGallery({ proofs }: { proofs: Proof[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            <div className="relative flex flex-wrap gap-3 mt-5">
                {proofs.map((proof, i) => (
                    <button
                        key={proof.src}
                        type="button"
                        onClick={() => setOpenIndex(i)}
                        className="group relative h-20 w-28 sm:h-24 sm:w-36 overflow-hidden rounded-lg border border-line hover:border-accent/50 transition-colors duration-200"
                    >
                        <Image
                            src={proof.src}
                            alt={proof.alt}
                            fill
                            sizes="144px"
                            className="object-cover object-top transition-transform duration-200 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {openIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpenIndex(null)}
                    >
                        <motion.div
                            className="relative max-h-[85vh] max-w-3xl w-full"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={proofs[openIndex].src}
                                alt={proofs[openIndex].alt}
                                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                            />
                            <button
                                type="button"
                                onClick={() => setOpenIndex(null)}
                                aria-label="Close"
                                className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-surface border border-line text-primary flex items-center justify-center hover:border-accent/50 transition-colors duration-200"
                            >
                                ✕
                            </button>

                            {proofs.length > 1 && (
                                <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 font-mono text-[11px] text-dim">
                                    {proofs.map((_, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setOpenIndex(i)}
                                            className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                                                i === openIndex ? "bg-accent" : "bg-dim/40"
                                            }`}
                                            aria-label={`View proof ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
