import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FaCreditCard, FaReceipt, FaShieldAlt } from "react-icons/fa";
import receipts from "../../assets/images/receipts.jpg";
import SecurePayments from "../../assets/images/SecurePayments.jpg";
import DataSecurity from "../../assets/images/DataSecurity.jpg";

const gradient = "linear-gradient(90deg, #0E064B 0%, #000000 100%)";
const textWhite = "text-white";

const PaymentsSecurity = () => {
  const cards = [
    {
      icon: <FaCreditCard />,
      title: "Secure Payments",
      description: (
        <>
          UPI, major cards, net banking with <br /> encrypted processing
        </>
      ),
      bg: SecurePayments,
    },
    {
      icon: <FaShieldAlt />,
      title: "Data Protection",
      description: "PCI-aware handling with GDPR-ready compliance",
      bg: DataSecurity,
    },
    {
      icon: <FaReceipt />,
      title: "Instant Receipts",
      description: "Digital receipts with GST details where applicable",
      bg: receipts,
    },
  ];

  return (
    <div>
      <section className={`py-20 ${textWhite}`} style={{ background: gradient }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">Payments & Security</h2>
            <p className="text-[20px] opacity-90 max-w-3xl mx-auto">
              Your transactions and data are protected with industry-leading{" "}
              <br />
              security
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cards.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-8 border border-white/20 flex items-center justify-center text-center flex-col overflow-hidden group"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="opacity-90 text-[16px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features + Link */}
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {["Encrypted", "PCI-aware", "GDPR-ready"].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-[16px] w-[16px] mr-2">
                    <BsCheck2Circle className="text-[#28BD5A]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a href="#" className="text-white font-medium underline">
              Payment & Data Policy →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentsSecurity;
