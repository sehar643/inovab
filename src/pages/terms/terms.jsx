import React, { useState } from "react";

const Terms = () => {
    const [activeSection, setActiveSection] = useState("section1");

    const sections = [
        { id: "section1", title: "1. Explanation" },
        { id: "section2", title: "2. IDL Overview and Key Terms of Service" },
        { id: "section3", title: "3. Relevant Regulations" },
        { id: "section4", title: "4. Eligibility and Restrictions" },
        { id: "section5", title: "5. AML and CTF Compliance" },
        { id: "section6", title: "6. Confidentiality" },
        { id: "section7", title: "7. Risk Considerations & Disclosures" },
        { id: "section8", title: "8. Insufficient Balance" },
        { id: "section9", title: "9. Limitation of Liability; Disclaimer of Warranty" },
        { id: "section10", title: "10. Website; Third-Party Links and Content" },
        { id: "section11", title: "11. Legal Compliance" }
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
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Inovab Digital Labs Terms</h1>
                    <p className="mb-8">
                        By holding, using, or otherwise engaging with IDL, or by utilizing any IDL Services,
                        you hereby agree to comply with and be bound by the terms and conditions set forth in these IDL Terms.
                        These Terms are supplementary to and form an integral part of the IDL151 Account User Agreement,
                        which governs your use of the IDL151 Account for accessing IDL Services.
                    </p>

                    {sections.map((section) => (
                        <div id={section.id} key={section.id} className="mb-8 scroll-mt-20">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h2>

                            {section.id === "section1" && (
                                <>
                                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                        <li>
                                            Authority refers to any sovereign nation, its political subdivisions (including state, local, or regional governments), international organizations, and any agencies, commissions, authorities, instrumentalities, judicial or administrative bodies, regulatory agencies, law enforcement agencies, securities or futures exchanges, courts, central banks, or any other entities vested with the power to exercise executive, legislative, judicial, taxing, regulatory, or administrative functions that pertain to government operations or public governance.
                                        </li>
                                        <li>
                                            A Dispute Refers to any disagreement, claim, or controversy arising from these Terms, including issues related to interpretation, performance, breach, or validity.
                                        </li>
                                        <li>
                                            Dollars refer to the fiat currency in which the IDL is denominated, or its equivalent
                                        </li>
                                        <li>
                                            IDL151 refers to IDL151 Limited, a company incorporated as a Limited Liability Partnership (LLP) and Limited Liability Company (LLC) by shares in Pakistan and the United Arab Emirates.
                                        </li>
                                        <li>
                                            IDL151 Account refers to one or more accounts opened in your name with IDL151.
                                        </li>
                                        <li>
                                            The IDL151 Account User Agreement refers to the agreement between a user and IDL151 regarding the use of the services offered by IDL151 through the IDL151 Account.
                                        </li>
                                        <li>
                                            IDL refers to various stablecoins backed by different fiat currencies, issued by IDL151 periodically.
                                        </li>
                                        <li>
                                            IDL Supported Blockchains refers to the blockchains on which the USDI stablecoin is supported.
                                        </li>
                                        <li>
                                            USDI is an IDL, a U.S. Dollar Coin issued by IDL151, that is designed to maintain a stable value of 1 U.S. Dollar, subject to the terms and conditions outlined in these terms.
                                        </li>
                                        <li>
                                            USDI is an IDL backed by an amount equal to the value of U.S. Dollars or U.S. Dollar-denominated assets held by IDL151. For every USDI issued and in circulation, IDL151 ensures that it holds reserves consisting of either one U.S. Dollar (USD) or an equivalent value in USD-denominated assets, referred to as the USDI Reserves.
                                        </li>
                                        <li>
                                            Rules" refers to the regulations or operating procedures of any clearing system, stock exchange, or market, including statutes, laws, regulations, ordinances, judgments, orders, decrees, permits, concessions, grants, franchises, licenses, agreements (whether voluntary or involuntary), directives, requirements, or any other governmental restrictions. This also encompasses any binding decisions, determinations, interpretations, or administrations related to the aforementioned, as enforced by or in accordance with any relevant authority, whether currently in effect or enacted in the future.
                                        </li>
                                        <li>
                                            By holding or using IDLor accessing IDLServices, you agree to refrain from the following actions:
                                            <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                                <li>
                                                    Sending IDL to individuals or institutions located in jurisdictions outside of those supported.
                                                </li>
                                                <li>
                                                    Violating, or assisting others in violating, any applicable rules or regulations.
                                                </li>
                                                <li>
                                                    Intentionally attempting to defraud, or assisting others in defrauding, IDL151 or other users.
                                                </li>
                                                <li>
                                                    Providing false, inaccurate, or misleading information.
                                                </li>
                                                <li>
                                                    Interfering with, intercepting, or expropriating any system, data, or information.
                                                </li>
                                                <li>
                                                    Engaging in transactions involving the proceeds of illegal activities.
                                                </li>
                                                <li>
                                                    Transmitting or uploading viruses, worms, or other malicious software or programs.
                                                </li>
                                                <li>
                                                    Attempting to gain unauthorized access to IDL151 accounts, the IDL151 website, or any related networks or systems.
                                                </li>

                                                <li>
                                                    Using the IDLServices on behalf of third parties or acting as an intermediary between IDL151 and third parties.
                                                </li>
                                                <li>
                                                    Collecting user information from other users, including but not limited to email addresses.
                                                </li>
                                                <li>
                                                    Defaming, harassing, or infringing on the privacy or intellectual property rights of IDL151 or any other users.
                                                </li>
                                                <li>
                                                    Uploading, displaying, or transmitting messages, photos, videos, or other media containing illegal goods, violent, obscene, or copyrighted content.
                                                </li>

                                            </ul>
                                        </li>
                                    </ul>
                                </>
                            )}
                            {section.id === "section2" && (
                                <>
                                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                        <li>
                                            Subject to your agreement to and compliance with the IDL151 Account User Agreement, IDL151 offers the following IDL-related services to you: (i) the ability to purchase IDL from IDL151 using the fiat currency in which the IDL is denominated, and (ii) the ability to sell IDL to IDL151 in exchange for the fiat currency in which the IDL is denominated (together, the "IDL Services"). Your use of the IDL Services is governed by these Terms. IDL151 reserves the right to discontinue any of the IDL Services at any time, as outlined in Section 1 of these IDL Terms.
                                        </li>
                                        <li>
                                            You acknowledge and agree that you may only purchase IDL from IDL151 using the fiat currency in which the IDL is denominated, and sell IDL to IDL151 in exchange for the same fiat currency, through your IDL151 Account directly with IDL151, provided your IDL151 Account is in good standing.
                                        </li>
                                        <li>
                                            By transferring IDL to another address, you automatically transfer and unconditionally assign the right to sell IDL for the fiat currency it is denominated in to IDL151, to the recipient (the "Holder") of that address, and to any subsequent Holders. This is contingent upon the Holder being eligible to register and actually registering a IDL151 Account. For clarity, if a Holder is ineligible to register for an IDL151 Account, or fails to do so, they will not have the right to sell IDL to IDL151.
                                        </li>
                                        <li>
                                            Each IDL is designed to maintain a value of 1 Dollar. For every 1 IDL issued, a corresponding 1 Dollar (or an equivalent value in assets) is held in the IDL USD Reserves.
                                        </li>
                                        <li>
                                            IDL151 may, at its discretion and in accordance with applicable rules, cancel, suspend, restrict, defer, or limit the buying and selling of IDL in any manner it deems reasonable. This includes setting individual or aggregate transaction limits on the buying, selling, or other activities initiated by you using your IDL151 Account during specific time periods as publicized by IDL151. Such actions may be taken in the following circumstances: (i) if sufficient IDL Reserves cannot be realized at an appropriate price or under acceptable terms, or if circumstances beyond IDL151's control prevent this; (ii) if IDL151 is unable to fulfill sale requests due to factors beyond its reasonable control; (iii) if significant sale requests or market volatility threaten the liquidity, solvency, value, or viability of IDL, including but not limited to the closure of a relevant digital asset exchange, suspension or restriction on trading by such platforms, an emergency, or the enforcement of any applicable laws; or (iv) other similar circumstances. For clarity, the buying and selling of IDL in this context refers to transactions between IDL151 and users with an active IDL151 Account, and not between Holders in general.
                                        </li>
                                        <li>
                                            Only represents your right to sell IDL for an equivalent amount of fiat currency, as denominated by IDL, through your IDL151 account.
                                        </li>
                                    </ul>
                                </>
                            )}
                            {section.id === "section3" && (
                                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                    <li>
                                        Your use of IDL and any associated services is governed by all relevant rules, including, but not limited to, tax regulations, anti-money laundering (AML), counter-terrorist financing (CTF) laws, and sanctions. By using the IDL services, you agree to comply with and be legally bound by these Terms and all applicable rules. These Terms are contingent on your ongoing compliance with these Terms and all relevant regulations.
                                    </li>
                                    <li>
                                        In accordance with applicable rules, we are required to prevent Restricted Persons from holding or using IDL or its services. A Restricted Person refers to any individual or entity subject to comprehensive sanctions under the economic sanctions programs enforced in the jurisdictions where we operate.
                                    </li>
                                    <li>
                                        IDL151 Accounts, IDL Services, and support for IDL are currently only available to individuals and institutions located in jurisdictions supported by us, as publicly communicated from time to time.
                                    </li>
                                </ul>
                            )}

                            {section.id === "section4" && (
                                <>
                                    By holding or using IDL, or accessing or using the IDL Services, you represent and warrant that:
                                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                        <li>
                                            You are at least 18 years old, not a Restricted Person, and are not holding IDL on behalf of a Restricted Person.
                                        </li>
                                        <li>
                                            You will not use IDL or the IDL Services for any illegal activity, including but not limited to illegal gambling, money laundering, fraud, blackmail, extortion, data ransoming, terrorism financing, violent activities, or any prohibited market practices.
                                        </li>
                                    </ul>
                                    <br />
                                    You further acknowledge that there may be additional representations and warranties made elsewhere in these Terms, and any misrepresentation by you constitutes a violation of these Terms.
                                    <br />
                                    IDL151 may, at its sole discretion, choose not to offer IDL or the IDL Services, in whole or in part, in certain markets due to applicable regulations or for other reasons, depending on your location.

                                </>
                            )}
                            {section.id === "section5" && (
                                <>
                                    Our Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) procedures are strictly aligned with all relevant regulations. These measures are in place to prevent the use of IDL Services for money laundering or terrorist financing. We are committed to ensuring compliance with these standards, and our policy is to take all necessary actions to block fraudulent transactions, report suspicious activities, and proactively combat money laundering, terrorist financing, and any associated financial crimes.
                                </>
                            )}
                            {section.id === "section6" && (
                                <>
                                    We are dedicated to safeguarding your personal information and ensuring transparency about how it is used. We encourage you to review the IDL151 Privacy Policy carefully, as it outlines how your personal information is collected, stored, protected, processed, disclosed, and utilized.
                                </>
                            )}
                            {section.id === "section7" && (
                                <>
                                    By accepting these Terms, you acknowledge that you have read, understood, and agreed to the risks associated with IDL and its Services, as outlined in the IDL risk factors appendix, which may be updated periodically.
                                </>
                            )}
                            {section.id === "section8" && (
                                <>
                                    If a payment made for the purchase of IDL is reversed by your bank or IDL151's banking partners after the tokenization of IDL has been completed, IDL151 will initiate the sale of IDL and deduct the corresponding amount from your IDL151 Account, in accordance with a court order or other legal or regulatory instructions. Additionally, upon investigating the reversal request, IDL151 reserves the right, though is not obligated, to (i) initiate the sale of IDL and deduct the value from your IDL151 Account, (ii) deduct the reversed amount from future IDL issuances to your IDL151 Account, or (iii) suspend your IDL151 Account and access to the IDL Services until the issue is fully resolved. IDL151 also retains the discretion to take any additional actions necessary to address the situation, in compliance with applicable laws and regulations.
                                </>
                            )}
                            {section.id === "section9" && (
                                <>
                                    You explicitly acknowledge and agree that IDL151, along with our affiliates and service providers (including, but not limited to, any custodian), and their respective officers, directors, agents, joint venturers, employees, and representatives, will not be held liable for any indirect, incidental, special, consequential, or exemplary damages, including but not limited to, loss of profits, goodwill, use, data, or other intangible losses, to the extent permitted by applicable regulations. This applies even if IDL151 has been advised of the possibility of such damages, whether arising from contract, tort, negligence, strict liability, or otherwise, resulting from: (i) the use or inability to use or hold IDL; (ii) the cost of acquiring substitute goods or services due to any goods, data, information, or services purchased or obtained, messages received, or transactions entered into involving IDL; (iii) unauthorized access to or alteration of your data or transmissions; or (iv) any other issue related to IDL.
                                    <br/>
                                    <br/>
                                    IDL is provided "as is" without any representations or warranties, whether express, implied, or statutory. IDL151, our affiliates, and their respective officers, directors, agents, joint venturers, employees, and suppliers specifically disclaim any implied warranties of title, merchantability, fitness for a particular purpose, or non-infringement. IDL151 does not warrant that (i) IDL will meet your requirements, (ii) IDL will be uninterrupted, timely, secure, or error-free, or (iii) the quality of any products, services, information, or other materials purchased or obtained by you will meet your expectations.
                                </>
                            )}
                            {section.id === "section10" && (
                                <>
                                    IDL151 makes every effort to provide accurate, reliable, and up-to-date information on the IDL151 website. However, we do not guarantee that the information is always complete, accurate, or current. IDL151 will periodically update the website to ensure it reflects the most current information, but you are encouraged to independently verify any details. The IDL151 website may contain links to third-party websites, applications, events, or other external content ("Third Party Content"). These links are provided solely for your convenience, and the inclusion of such links does not imply IDL151’s endorsement or approval of the third-party products, services, or content. IDL151 is not responsible for any damages, losses, or other consequences that may arise from reliance on the information provided on the IDL151 website or in any Third Party Content.
                                </>
                            )}
                            {section.id === "section11" && (
                                <>
                                    The IDL and IDL Services are governed by Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) regulations, as well as applicable Sanctions laws. By holding, using, or accessing IDL, or utilizing any of the IDL Services, you represent and warrant that your actions comply with all relevant Sanctions regulations. This includes, but is not limited to, a prohibition on holding or using IDL, or accessing the IDL Services, if you are a Restricted Person, or if you intend to engage in transactions with or on behalf of any Restricted Persons. You agree not to use the IDL Services to facilitate or engage in any transactions that would violate these legal requirements, and to immediately notify IDL in the event you become aware of any potential violations.
                                </>
                            )}
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
        </div>
    );
};

export default Terms;
