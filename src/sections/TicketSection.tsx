import React from "react";
import SectionTitle from "../components/SectionTitle";

const TicketSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Get Your Ticket"
          subtitle="Secure your spot at the Nigeria Stablecoin Summit 2025."
          center
        />
        <div className="flex justify-center mt-10">
          {/* Developer tip: Wrap this widget snippet in a div and apply your preferred width styling */}
          <div className="tt-widget w-full max-w-2xl">
            <div className="tt-widget-fallback">
              <iframe
                src="https://widget.tix.africa/ngstablecoin/VXNlci0xM2Y5NGU2NC1mNjZmLTQwNTEtYjBjZi1kZjQ0NzU3NGZhNGQ="
                style={{ width: "100%", height: "600px", border: "none" }}
                title="Ticket Widget"
              ></iframe>
            </div>
            <script
              src="https://widget.tix.africa/widget.js"
              data-url="https://widget.tix.africa/ngstablecoin/VXNlci0xM2Y5NGU2NC1mNjZmLTQwNTEtYjBjZi1kZjQ0NzU3NGZhNGQ="
            ></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;
