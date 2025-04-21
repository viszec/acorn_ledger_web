import { Metadata } from "next";
import { privacyPolicyContent } from "@/config/content/privacy-policy";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Acorn Ledger",
  description: privacyPolicyContent.description,
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="section-wrapper bg-gray-50 pt-6 pb-16">
        <div className="section-container min-h-screen">
          <div className="max-w-7xl mx-auto px-0 sm:px-8 lg:px-14 py-4 sm:py-6 lg:py-12">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 lg:mt-14 mb-8 sm:mb-10 lg:mb-14 text-gray-900 text-center">
              {privacyPolicyContent.title}
            </h1>
            <div className="prose prose-purple max-w-none bg-white p-4 sm:p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 text-xs sm:text-sm">
                Last updated: {privacyPolicyContent.lastUpdated}
              </p>

              {privacyPolicyContent.sections.map((section) => (
                <div key={section.id} className="mt-6 sm:mt-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 mt-2 sm:mt-4 text-xs sm:text-sm">
                    {section.content}
                  </p>

                  {section.items?.map((item) => (
                    <div key={item.title} className="mt-4 sm:mt-6">
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <ul className="list-disc pl-4 sm:pl-6 text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
                        {item.items.map((subItem) => (
                          <li key={subItem}>{subItem}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}

              <div className="pt-6 sm:pt-8">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Contact Us
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-4">
                  If you have any questions about our Privacy Policy, please
                  contact us at:
                  <Link
                    href={`mailto:${privacyPolicyContent.contactEmail}`}
                    className="text-purple-600 ml-2"
                  >
                    {privacyPolicyContent.contactEmail}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
