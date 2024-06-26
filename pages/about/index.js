import React from "react";

import { About, Categories, FeaturedPosts } from "@/components";

const AboutPage = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <About />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <FeaturedPosts />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
