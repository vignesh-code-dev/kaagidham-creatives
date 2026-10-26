import { Link } from "react-router-dom";

export default function PizzaStoryCaseStudy() {
  return (
    <div className="font-['Montserrat',sans-serif] bg-[#FBF8F1] min-h-screen text-[#0B0B0B] py-16 px-4 md:px-24">
      <div className="max-w-[1000px] mx-auto">
        {/* Top Minimal Badge / Header Bar */}
        <div className="flex justify-end items-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-[#FFC20E] border-2 border-[#0B0B0B] rounded-full shadow-[3px_3px_0_#0B0B0B]">
            Case Study
          </span>
        </div>

        {/* Project Title & Headline Section */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0B0B0B] mb-6 leading-[1.08]">
            Every Slice Has a Story.
          </h1>

          <p className="text-xl md:text-2xl font-medium text-[#B45309] italic">
            "What if a simple rooftop pizza idea could become a brand people
            recognise, crave and remember?"
          </p>
        </div>

        {/* Narrative Content */}
        <div className="space-y-6 text-[#44403c] text-lg md:text-xl leading-[1.7] mb-16 max-w-[900px]">
          <p>
            That was the creative opportunity we saw in Pizza Story. At
            Kaagidham Creatives, we set out to shape a casual food concept into
            a distinctive brand experience — one that brings together rooftop
            dining, takeaway and the potential of online delivery.
          </p>
          <p>
            Our approach was simple: turn an idea into an experience, and an
            experience into a story people want to share.
          </p>

          <div className="p-6 md:p-8 bg-white border-2 border-[#0B0B0B] rounded-2xl text-[#0B0B0B] shadow-[4px_4px_0_#0B0B0B] my-8">
            <p className="font-semibold text-base md:text-lg">
              "At Kaagidham Creatives, we believe good design goes beyond
              looking good. It gives ideas purpose, builds connections and turns
              creative thinking into real-world impact."
            </p>
            <span className="text-[#B45309] text-xs font-extrabold tracking-widest uppercase mt-4 block">
              — Ideas on paper, impact in reality.
            </span>
          </div>
        </div>

        {/* Visual Showcase Section Header */}
        <div className="mb-10 border-t-2 border-[#0B0B0B] pt-12">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B0B0B] mb-2">
            Visual Execution & Showcase
          </h3>
          <p className="text-[#55514a] text-sm">
            A comprehensive look into the brand components built for Pizza
            Story.
          </p>
        </div>

        {/* Uneven / Masonry Grid Layout (Images maintain full proportions without cropping) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Asset 1 (Full Width / Span 2 on Desktop for emphasis) */}
          <div className="md:col-span-2 bg-white overflow-hidden flex flex-col justify-between">
            <div className="overflow-hidden mb-4 bg-[#FBF8F1] flex justify-center items-center p-2">
              <img
                src="/images/Pizza Story Brand Identity Showcase.png"
                alt="Brand Identity Showcase"
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                01 / Identity & Packaging
              </span>
              <h4 className="font-extrabold text-xl text-[#0B0B0B] mt-1">
                Brand Identity & Storefront Showcase
              </h4>
              <p className="text-sm text-[#55514a] mt-2">
                Comprehensive visual identity including storefront signage,
                customized pizza boxes, carry bags, staff uniforms, and menu
                boards.
              </p>
            </div>
          </div>

          {/* Asset 2 */}
          <div className="bg-white overflow-hidden flex flex-col justify-between">
            <div className="overflow-hidden mb-4 bg-[#FBF8F1] flex justify-center items-center p-2">
              <img
                src="/images/Pizza Story Posters on a Chennai Street Wall.png"
                alt="Chennai Street Wall Posters"
                className="w-full h-auto object-contain max-h-[380px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                02 / OOH Campaign
              </span>
              <h4 className="font-extrabold text-xl text-[#0B0B0B] mt-1">
                Outdoor Wall Posters in Chennai
              </h4>
              <p className="text-sm text-[#55514a] mt-2">
                High-impact street posters pasted on historic Chennai walls to
                drive local street culture engagement.
              </p>
            </div>
          </div>

          {/* Asset 3 */}
          <div className="bg-white overflow-hidden flex flex-col justify-between">
            <div className=" overflow-hidden mb-4 bg-[#FBF8F1] flex justify-center items-center p-2">
              <img
                src="/images/Pizza Story_ A Cheesy Cafe Moment.png"
                alt="Cheesy Cafe Moment"
                className="w-full h-auto object-contain max-h-[380px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                03 / Lifestyle
              </span>
              <h4 className="font-extrabold text-xl text-[#0B0B0B] mt-1">
                Rooftop Cafe Moments
              </h4>
              <p className="text-sm text-[#55514a] mt-2">
                Capturing genuine customer experiences and cozy dining moments
                at the rooftop outlet.
              </p>
            </div>
          </div>

          {/* Asset 4 (Full Width / Span 2) */}
          <div className="md:col-span-2 bg-white overflow-hidden flex flex-col justify-between">
            <div className="overflow-hidden mb-4 bg-[#FBF8F1] flex justify-center items-center p-2">
              <img
                src="/images/Pizza Story Social Campaign Mockup.png"
                alt="Social Campaign Mockup"
                className="w-full h-auto object-contain max-h-[480px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                04 / Digital & Social
              </span>
              <h4 className="font-extrabold text-xl text-[#0B0B0B] mt-1">
                Social Media Campaign & App UI Integration
              </h4>
              <p className="text-sm text-[#55514a] mt-2">
                Instagram grid mockups, online delivery branding assets, and
                digital touchpoints designed to build online traction.
              </p>
            </div>
          </div>

          {/* Asset 5 */}
          <div className="bg-white overflow-hidden flex flex-col justify-between">
            <div className="overflow-hidden mb-4 bg-[#FBF8F1] flex justify-center items-center p-2">
              <img
                src="/images/Every Slice Has a Story.png"
                alt="Every Slice Has a Story"
                className="w-full h-auto object-contain max-h-[380px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                05 / Print Design
              </span>
              <h4 className="font-extrabold text-xl text-[#0B0B0B] mt-1">
                Primary Print Campaign Poster
              </h4>
              <p className="text-sm text-[#55514a] mt-2">
                Core promotional visual highlighting dine-in, takeaway, and
                delivery services.
              </p>
            </div>
          </div>

          {/* Asset 6 */}
          <div className="bg-white overflow-hidden flex flex-col justify-between">
            <div className="overflow-hidden mb-4 bg-[#FBF8F1] flex justify-center items-center p-2">
              <img
                src="/images/Chennai Wall Pizza Story Ad.png"
                alt="Chennai Wall Ad"
                className="w-full h-auto object-contain max-h-[380px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                06 / Street Ads
              </span>
              <h4 className="font-extrabold text-xl text-[#0B0B0B] mt-1">
                Local Chennai Advertising
              </h4>
              <p className="text-sm text-[#55514a] mt-2">
                Street-level brand placement built to capture neighborhood
                attention.
              </p>
            </div>
          </div>

          {/* Asset 7 */}
          <div className="bg-white overflow-hidden flex flex-col justify-between">
            <div className="overflow-hidden mb-4 bg-[#FBF8F1] flex justify-center items-center p-2">
              <img
                src="/images/Playful Pizza Slice Cafe Moment .png"
                alt="Playful Pizza Slice"
                className="w-full h-auto object-contain max-h-[380px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                07 / Mascot Art
              </span>
              <h4 className="font-extrabold text-xl text-[#0B0B0B] mt-1">
                Playful Brand Character
              </h4>
              <p className="text-sm text-[#55514a] mt-2">
                Interactive mascot design creating memorable emotional
                connections with customers.
              </p>
            </div>
          </div>

          {/* Asset 8 */}
          <div className="bg-white overflow-hidden flex flex-col justify-between">
            <div className="overflow-hidden mb-4 bg-[#FBF8F1] flex justify-center items-center p-2">
              <img
                src="/images/Cafe Delight with Pizza Story.png"
                alt="Cafe Delight"
                className="w-full h-auto object-contain max-h-[380px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                08 / Experience
              </span>
              <h4 className="font-extrabold text-xl text-[#0B0B0B] mt-1">
                Customer Delight & Packaging
              </h4>
              <p className="text-sm text-[#55514a] mt-2">
                Showcasing tactile engagement with custom pizza boxes and fresh
                slices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Footer */}
        <div className="mt-20 pt-8 border-t-2 border-[#0B0B0B] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-extrabold text-base">
            Kaagidham Creatives © 2026
          </span>
          <Link
            to="/"
            className="bg-[#0B0B0B] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#FFC20E] hover:text-[#0B0B0B] transition-colors border-2 border-[#0B0B0B] shadow-[4px_4px_0_#0B0B0B]"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
