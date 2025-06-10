import React from 'react';

const TermsAndCondition = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-center">Terms and Conditions</h1>

            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque vel sapien cursus interdum.</p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in scelerisque nisi.</p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet consectetur aliquet, libero odio.</p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, purus a tristique hendrerit, quam justo.</p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel purus et arcu vehicula blandit.</p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisi vel leo finibus aliquet.</p>
            </section>

            {/* Call to Action Section */}
            <section className="bg-green-600 text-white p-10 text-center mt-10 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
                <p className="mb-4">If you have any questions regarding these terms, please contact us.</p>
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
                    Contact Support
                </button>
            </section>
        </div>
    );
};

export default TermsAndCondition;