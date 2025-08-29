import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Users, Heart, Shield, Megaphone } from "lucide-react";
import ActionSection from "../components/ActionComponent";

const GetInvolved = () => {
const missionData = [
  {
    title: "Awareness Creation",
    desc: "Knowledge is the first line of defense against cancer. By reaching out to schools, workplaces, churches, and local communities, we empower people with the information they need to recognize early warning signs, adopt healthier lifestyles, and seek timely medical help. Early awareness doesn’t just save lives — it transforms generations.",
    img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
  },
  {
    title: "Prevention Programs",
    desc: "Cancer prevention begins with everyday choices and access to the right resources. Through free screenings, lifestyle education, and hands-on workshops, we encourage healthier eating, active living, and regular health check-ups. Prevention is not just about avoiding disease — it’s about building a culture of wellness that protects entire communities.",
    img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
  },
  {
    title: "Support & Care",
    desc: "A cancer diagnosis is never fought alone. Our mission extends beyond awareness and prevention — it’s about standing beside patients and their families with compassion, resources, and emotional support. From counseling and peer groups to care packages and financial assistance, we believe in restoring hope and dignity at every stage of the journey.",
    img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
];

const actions = [
  {
    icon: <Users className="w-10 h-10 text-pink-600" />,
    title: "Volunteer with Us",
    desc: "Every step counts. By joining our awareness walks, health fairs, and community outreach programs, you help bring life-saving information directly to people who need it most. Together, we can create stronger, healthier communities where prevention becomes a way of life.",
    btn: "Join Now",
  },
  {
    icon: <Heart className="w-10 h-10 text-red-500" />,
    title: "Support Prevention",
    desc: "Your contribution goes beyond money — it becomes hope. Donations fund free screenings, lifestyle education workshops, and preventive health initiatives that can detect cancer early and save countless lives. A little support today means a healthier tomorrow for families everywhere.",
    btn: "Donate",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-purple-600" />,
    title: "Spread Awareness Online",
    desc: "The fight against cancer doesn’t stop at clinics — it starts in conversations. By sharing verified resources, busting myths, and amplifying preventive health messages on social media, you can reach people across borders and inspire them to take charge of their health.",
    btn: "Start Sharing",
  },
];

  

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6">
        {/* Animated background blobs */}
        <motion.div
          className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40 -top-20 -left-20"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40 -bottom-20 -right-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />

        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
          Together, We Can Defeat Cancer
        </h1>

        <TypeAnimation
          sequence={[
            "Create Awareness",
            2000,
            "Prevent Cancer Before It Starts",
            2000,
            "Support Survivors",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block mt-4 text-xl md:text-2xl font-medium text-gray-700"
        />

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
            Join the Movement
          </button>
          <button className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition">
            Learn Prevention Tips
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-12 space-y-16">
        {missionData.map((m, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.img
              src={m.img}
              alt={m.title}
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {m.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </section>

     <ActionSection actions={actions}/>
      {/* Final CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Every Action Counts. Together, We Can Save Lives.
        </h2>
        <button className="px-8 py-4 rounded-full bg-white text-pink-600 font-bold text-lg shadow-lg hover:scale-105 transition">
          Get Involved Today
        </button>
        <p className="mt-4 text-sm opacity-90">
          Your voice, your time, your support — all make a difference.
        </p>
      </section>
    </div>
  );
};

export default GetInvolved;
