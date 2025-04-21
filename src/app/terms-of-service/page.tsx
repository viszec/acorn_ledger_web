import { Metadata } from "next";
import { termsOfServiceContent } from "@/config/content/terms-of-service";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Acorn Ledger",
  description: termsOfServiceContent.description,
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="section-wrapper bg-gray-50 pt-6 pb-16">
        <div className="section-container min-h-screen">
          <div className="max-w-7xl mx-auto px-0 sm:px-8 lg:px-14 py-4 sm:py-6 lg:py-12">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 lg:mt-14 mb-8 sm:mb-10 lg:mb-14 text-gray-900 text-center">
              {termsOfServiceContent.title}
            </h1>
            <div className="prose prose-purple max-w-none bg-white p-4 sm:p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 text-xs sm:text-sm">
                Last updated: {termsOfServiceContent.lastUpdated}
              </p>

              {termsOfServiceContent.sections.map((section) => (
                <div key={section.id} className="mt-6 sm:mt-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  {Array.isArray(section.content) ? (
                    section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-600 mt-2 sm:mt-4 text-xs sm:text-sm"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-600 mt-2 sm:mt-4 text-xs sm:text-sm">
                      {section.content}
                    </p>
                  )}

                  {section.features?.map((feature) => (
                    <div key={feature.title} className="mt-4 sm:mt-6">
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">
                        {feature.title}
                      </h3>
                      <ul className="list-disc pl-4 sm:pl-6 text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
                        {feature.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {section.responsibilities?.map((responsibility) => (
                    <div key={responsibility.title} className="mt-4 sm:mt-6">
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">
                        {responsibility.title}
                      </h3>
                      <ul className="list-disc pl-4 sm:pl-6 text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
                        {responsibility.items.map((item) => (
                          <li key={item}>{item}</li>
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
                  For any questions regarding these terms, please contact us at:
                  <Link
                    href={`mailto:${termsOfServiceContent.contactEmail}`}
                    className="text-purple-600 ml-2"
                  >
                    {termsOfServiceContent.contactEmail}
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
