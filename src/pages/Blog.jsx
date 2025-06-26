import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Blog.css";

function useIntersectionAnimation(className, animationClass) {
  useEffect(() => {
    const elements = document.querySelectorAll(className);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, [className, animationClass]);
}

const fullBlogContent = {
  1: (
    <>
      <h2>Why Do We Need an AI Expert System in 2025?</h2>
      <p>
        In 2025, AI expert systems are essential for industries demanding transparency, reliability, and rule-based control. Unlike black-box AI models, expert systems offer explainability, making them ideal for regulated domains like healthcare, finance, and aviation.
      </p>
      <p>
        In areas with limited data but rich domain knowledge — such as civil engineering — expert systems leverage rule-based logic for real-time, auditable decision-making. Their predictable behavior suits safety-critical applications like robotics and aerospace. With the rise of neuro-symbolic AI, these systems blend the strengths of symbolic logic with neural networks, offering both accuracy and accountability.
      </p>
    </>
  ),
  2: (
    <>
      <h2>What is AIOps and Why It Matters</h2>
      <p>
        AIOps (Artificial Intelligence for IT Operations) transforms how IT environments are managed. By leveraging machine learning on operational data, AIOps automates issue detection, improves monitoring, and enables predictive maintenance.
      </p>
      <p>
        With reduced downtime and enhanced efficiency, businesses benefit from proactive alerts and optimized workflows. To implement AIOps successfully, start with high-quality data, define goals, and promote collaboration between IT and data teams.
      </p>
    </>
  ),
  3: (
    <>
      <h2>How a Sitemap Helps Google Index Your Website Better</h2>
      <p>
        A sitemap is vital for ensuring your web pages are quickly and accurately indexed by search engines. It informs Google about the structure of your site, helping it discover even deeply nested or newly added pages.
      </p>
      <p>
        By generating and submitting an XML sitemap to Google Search Console, you enhance visibility, improve SEO rankings, and boost discoverability for your most important content.
      </p>
    </>
  ),
  4: (
    <>
      <h2>How Generative AI Makes Debugging Easier</h2>
      <p>
        Generative AI is reshaping software debugging by simplifying complex error handling. It translates error messages into human-readable explanations, suggests code fixes, and even rewrites functions to handle edge cases.
      </p>
      <p>
        Integrated with IDEs, GenAI offers real-time suggestions, debugging scripts, and testing enhancements. This leads to faster development, cleaner code, and fewer production bugs.
      </p>
    </>
  ),
  5: (
    <>
      <h2>Is Agentic AI Killing Developer Jobs?</h2>
      <p>
        Agentic AI systems automate repetitive tasks like boilerplate coding, test generation, and performance optimization. They now plan and execute complex development cycles, raising concerns about job security for low-skill roles.
      </p>
      <p>
        However, skilled developers remain crucial — not just as coders but as orchestrators, architects, and domain experts. Future roles will focus on AI-augmented workflows, system design, and cross-domain knowledge integration.
      </p>
    </>
  ),
  6: (
    <>
      <h2>5 AI Tools to Create Websites Effortlessly</h2>
      <p>
        AI is revolutionizing website creation. Tools like <strong>WIX ADI</strong> and <strong>Framer AI</strong> offer instant layout generation from prompts. <strong>Durable</strong> is ideal for small businesses, delivering websites in under 2 minutes.
      </p>
      <p>
        <strong>10Web</strong> empowers WordPress users with AI-powered migration and building tools, while <strong>Bookmark’s AIDA</strong> allows full customization with AI assistance. These tools make web design faster, easier, and more intuitive.
      </p>
    </>
  ),
  7: (
    <>
      <h2>Acutix Mentorship Program: Learn. Build. Grow.</h2>
      <p>
        Our mentorship program targets pre-final and final-year students with prior internship experience. Students gain hands-on exposure to real-world projects in domains like Web Development, AI Tools, and UI/UX.
      </p>
      <p>
        With personalized mentoring from Acutix experts, certifications, and career networking opportunities, the program enhances resumes and accelerates professional growth. Apply now and take your skills to the next level.
      </p>
    </>
  ),
  8: (
    <>
      <h2>What Are Large Video Models (LVMs)?</h2>
      <p>
        LVMs are powerful AI models built to process, understand, and generate video content. They handle multimodal inputs — video, audio, and text — enabling sophisticated applications in video summarization, surveillance, and sports analytics.
      </p>
      <p>
        Their temporal awareness allows them to track motion and events over time. Trained on massive datasets, LVMs are revolutionizing how machines understand dynamic visual content.
      </p>
    </>
  ),
  9: (
    <>
      <h2>Why Choose Node.js Over Spring Boot?</h2>
      <p>
        Node.js excels in real-time, I/O-heavy applications thanks to its non-blocking, event-driven model. Its use of JavaScript across the stack allows rapid development and unified logic.
      </p>
      <p>
        However, Spring Boot is better suited for enterprise systems requiring transaction control, strong type safety, and robust security features. Choose based on your app’s performance, scale, and existing tech stack.
      </p>
    </>
  )
};


function BlogsSection() {
  const [popupId, setPopupId] = useState(null);

  useIntersectionAnimation(".blogs-section", "slide-up");
  useIntersectionAnimation(".blog-card", "fade-up");

const blogPosts = [
  {
    id: 1,
    title: "Why Do We Need an AI Expert System in 2025?",
    date: "June 25, 2025",
    description:
      "Explore why rule-based AI systems are making a comeback in critical industries like healthcare, finance, and aerospace.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 2,
    title: "What is AIOps and Why It Matters",
    date: "June 20, 2025",
    description:
      "Discover how AIOps revolutionizes IT operations with machine learning, automation, and predictive analytics for smarter infrastructure.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 3,
    title: "How a Sitemap Helps Google Index Your Website Better",
    date: "June 15, 2025",
    description:
      "Learn how submitting an XML sitemap improves your SEO by helping search engines crawl and index your site efficiently.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 4,
    title: "How Generative AI Makes Debugging Easier",
    date: "June 12, 2025",
    description:
      "See how GenAI speeds up debugging by generating code suggestions, explaining errors, and creating diagnostic scripts.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 5,
    title: "Is Agentic AI Killing Developer Jobs?",
    date: "June 10, 2025",
    description:
      "Examine how agentic AI shifts developer roles from coding to orchestration, and what skills will be in demand next.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 6,
    title: "5 AI Tools to Create Websites Instantly",
    date: "June 8, 2025",
    description:
      "Explore top AI website builders like Wix ADI, Framer, and Bookmark that simplify design for businesses and individuals.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 7,
    title: "Acutix Mentorship Program: Learn, Build, Grow",
    date: "June 5, 2025",
    description:
      "Get mentored by industry experts in web dev, AI, and UI/UX. Gain project experience, certifications, and a resume boost.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 8,
    title: "What Is a Large Video Model (LVM)?",
    date: "June 2, 2025",
    description:
      "Understand LVMs: how they process video, audio, and text to generate content, analyze motion, and enable smart video tools.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 9,
    title: "Why Choose Node.js Over Spring Boot (or Not)?",
    date: "May 30, 2025",
    description:
      "Compare Node.js and Spring Boot for different use cases — real-time apps, enterprise systems, microservices, and scalability.",
    image: "/placeholder.svg?height=250&width=400",
  }
];


  return (
    <>
      <Navbar />
      <section className="blogs-section">
        <div className="blogs-container">
          <div className="blogs-header">
            <h1 className="blogs-title">Latest Insights</h1>
            <p className="blogs-subtitle">
              Discover the latest trends, insights, and best practices in technology
              and digital transformation
            </p>
          </div>

          <div className="blogs-grid">
            {blogPosts.map((post, index) => (
              <article key={post.id} className={`blog-card blog-card-${index + 1}`}>
                <div className="blog-image-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                    loading="lazy"
                  />
                  <div className="blog-overlay">
                    <span className="read-more">Read More</span>
                  </div>
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <time className="blog-date">{post.date}</time>
                  </div>

                  <h2 className="blog-title">{post.title}</h2>

                  <p className="blog-description">
                    {post.description.substring(0, 150)}...
                  </p>

                  <button
                    className="blog-read-more"
                    onClick={() => setPopupId(post.id)}
                  >
                    Continue Reading <span className="arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {popupId && (
        <div className="popup-overlay" onClick={() => setPopupId(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setPopupId(null)}>
              ✖
            </button>
            {fullBlogContent[popupId] || <p>No content found.</p>}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default BlogsSection;