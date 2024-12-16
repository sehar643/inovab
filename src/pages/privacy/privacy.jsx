import React, { useState } from "react";

const Privacy = () => {
    const [activeSection, setActiveSection] = useState("section1");

    const sections = [
        { id: "section1", title: "Service" },
        { id: "section2", title: "Scope of Services" },
        { id: "section3", title: "Who This Policy Applies To" },
        { id: "section4", title: "Purpose of the Privacy Policy" },
        { id: "section5", title: "Cookies" },
        { id: "section6", title: "International Transfers" },
        { id: "section7", title: "Data Retention" },
        { id: "section8", title: "Update to the Privacy Policy and Your Responsibility to Inform Us of Updates" },
        { id: "section9", title: "Access and Correction of Your Personal Data Rights" }
    ];

    const scrollToSection = (id) => {
        setActiveSection(id);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
            <div className="container mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-3  ml-20">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy & Policy</h1>
                    <h3 className="mb-8" style={{ fontWeight: 'bold' }}>
                        Essential Notice Regarding the Collection, Use, and Protection of Your Personal Information.
                    </h3>
                    {sections.map((section) => (
                        <div id={section.id} key={section.id} className="mb-8 scroll-mt-20">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {section.id === "section1" && (
                                    <>
                                        The term "Services" refers to all services provided by IDL151 Limited, including those specified in the IDL151 Account User Agreement, USDI Terms, and any other interactions, communications, or engagements between you and IDL151. These Services may be updated or modified periodically, and the changes will be governed by this Privacy Policy.
                                    </>
                                )}
                                {section.id === "section2" && (
                                    <>
                                        The term "Services" refers to all services provided by IDL151 Limited, including those specified in the IDL151 Account User Agreement, USDI Terms, and any other interactions, communications, or engagements between you and IDL151. These Services may be updated or modified periodically, and the changes will be governed by this Privacy Policy.
                                    </>
                                )}
                                {section.id === "section3" && (
                                    <>
                                        References to "you" or "your" in this Privacy Policy include not only the individual or entity using the Services, but also any representatives, agents, or delegates acting on behalf of the User of IDL151 Accounts.
                                    </>
                                )}
                                {section.id === "section4" && (
                                    <>
                                        This Privacy Policy serves to inform you of our general privacy practices and how we handle your information. We are committed to protecting your privacy and providing transparency regarding our practices, ensuring that your personal data is processed in compliance with applicable privacy laws and regulations.
                                        <br />
                                        Please read this Privacy Policy carefully to understand how we use and protect your personal information when you engage with our Services.
                                    </>
                                )}
                                {section.id === "section5" && (
                                    <>
                                        You have the option to configure your browser to reject all cookies, some cookies, or to receive a notification when a website sets or accesses cookies. Please be aware that disabling or refusing cookies may result in certain features of our website or platform becoming unavailable or not functioning correctly.
                                    </>
                                )}
                                {section.id === "section6" && (
                                    <>
                                        Your personal data may be transferred to countries outside of your location, some of which may have different data protection regulations. In such cases, we implement appropriate safeguards to ensure that your data remains protected and that all transfers are carried out in compliance with applicable data protection laws and regulations. These measures are designed to protect your privacy and ensure the security of your data during international transfers.
                                    </>
                                )}
                                {section.id === "section7" && (
                                    <>
                                        We will retain your personal data only for the duration required to fulfill the purposes for which it was collected, including any legal, regulatory, accounting, or reporting obligations. Once your data is no longer needed for these purposes, it will be securely deleted or anonymized in accordance with applicable laws and internal policies.
                                    </>
                                )}
                                {section.id === "section8" && (
                                    <>
                                        We may periodically update this Privacy Policy. When updates are made, the date at the top of the policy will be revised. For significant changes, we will notify you directly or post an announcement on our website and platform. If you have any questions about the updates to the Privacy Policy, please don’t hesitate to reach out to us.
                                    </>
                                )}
                                {section.id === "section9" && (
                                    <>
                                        You have the right to request access to any personal data we hold about you and to request corrections if any of it is inaccurate.
                                        <br />
                                        To exercise these rights, please contact our Data Protection Officer at privacy@inovabdigitallabs.com.
                                        <br />
                                        A reasonable fee may apply for access to or correction of your personal data (or for exercising other rights). However, we may refuse to fulfill requests that are clearly unreasonable, repetitive, or excessive.
                                    </>
                                )}
                            </p>
                        </div>
                    ))}
                </div>


                {/* Right Sidebar */}
                <div className="lg:col-span-1 rounded-lg shadow-md p-4 sticky top-6 h-max">
                    <ul className="space-y-3">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={`text-sm w-full text-left px-2 py-1 rounded-md ${activeSection === section.id
                                        ? "text-blue-500 font-semibold border-l-4 border-blue-500 pl-2"
                                        : "text-gray-700 hover:text-blue-500"
                                        }`}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mb-6 mx-4 text-center">
    <strong>Important Temporary Notice :</strong> Our IDL151 user account is currently not functional, but it will be functional very soon. The privacy policy will apply to it. If any user wants to redeem or buy USDI, they can contact us through the <strong>'Contact Us'</strong> section  contact@digital.
</div>
        </div>
    );
};

export default Privacy;
