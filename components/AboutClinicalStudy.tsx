import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutClinicalStudy() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Is a Clinical Study?
          </h2>

          <p className="max-w-4xl text-justify text-gray-700 text-sm md:text-base leading-relaxed mb-10">
            A clinical study involves research using human volunteers (also
            called participants) that is intended to add to medical knowledge.
            There are two main types of clinical studies: clinical trials (also
            called interventional studies) and observational studies.{" "}
            <span className="underline cursor-pointer">
              ClinicalTrials.gov
            </span>{" "}
            includes both interventional and observational studies.
          </p>
        </Reveal>

        {/* Image */}
        <Reveal>
          <Image
            src="/assets/clinical-study.avif"
            alt="Clinical Study"
            width={1200}
            height={500}
            className="rounded-xl object-cover"
          />
        </Reveal>

      </div>
    </section>
  );
}
