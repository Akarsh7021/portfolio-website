import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, Gamepad2 } from 'lucide-react';

interface ProjectDetailProps {
  setCurrentPage: (page: string) => void;
}

export function ProjectDetail({ setCurrentPage }: ProjectDetailProps) {
  // 🔄 CONVERT: Active tab state
  // HTML/JS: let activeTab = 0;
  const [activeTab, setActiveTab] = useState(0);
  
  // 🔄 CONVERT: Video element references
  // HTML/JS: const videos = document.querySelectorAll('.video-player');
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // ========================================
  // 📍 EDIT HERE: Add your video URLs and tab content
  // ========================================
  const videoTabs = [
    {
      name: 'Gameplay',
      videoUrl: '/videos/final_gameplay.mp4', // 📝 Replace with your video URL
      description: 'Experience the fast-paced action of Strafe FPS. Watch as the player navigates through zombie-infested corridors with smooth movement mechanics and responsive controls.',
    },
    {
      name: 'Zombie AI',
      videoUrl: '/videos/zombie_ai.mp4', // 📝 Replace with your video URL
      description: 'See the intelligent zombie AI system in action. Enemies detect player movement, coordinate attacks, and adapt their behavior based on game state.',
    },
    {
      name: 'Weapons',
      videoUrl: '/videos/weapons.mp4', // 📝 Replace with your video URL
      description: 'Explore the diverse weapon arsenal including pistols, shotguns, and automatic rifles. Each weapon features unique recoil patterns and firing mechanics.',
    },
    {
      name: 'Level Design',
      videoUrl: '/videos/level_design.mp4', // 📝 Replace with your video URL
      description: 'Tour the intricately designed levels with strategic choke points, hidden areas, and atmospheric lighting that creates tension and excitement.',
    },
  ];
  // ========================================

  // 🔄 CONVERT: Auto-play video when tab changes or when in viewport
  // HTML/JS: Create a changeTab(index) function that handles this logic
  // IntersectionObserver API is the same in vanilla JS!
  // Auto-play video when tab changes or when in viewport
  useEffect(() => {
    const currentVideo = videoRefs.current[activeTab];
    if (!currentVideo) return;

    // 🔄 CONVERT: IntersectionObserver works the same in vanilla JS!
    // Just use: const observer = new IntersectionObserver(...);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentVideo.play().catch((error) => {
              console.log('Auto-play prevented:', error);
            });
          } else {
            currentVideo.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Play video when tab becomes active
    currentVideo.play().catch((error) => {
      console.log('Auto-play prevented:', error);
    });

    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeTab) {
        video.pause();
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Back Button */}
      <div className="px-6 py-6 max-w-7xl mx-auto">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Gamepad2 className="w-8 h-8 text-cyan-400" />
                <span className="text-cyan-400 text-sm uppercase tracking-wider">Game Development Project</span>
              </div>

              <h1 className="text-6xl md:text-7xl mb-8">Strafe FPS</h1>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Genre:</span>
                  <span className="text-zinc-300">First-Person Shooter with Zombies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Game Engine:</span>
                  <span className="text-zinc-300">Godot</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Script Language:</span>
                  <span className="text-zinc-300">GDScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Introduction */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl p-10 border border-zinc-800/50">
            <h2 className="text-3xl mb-6">Project Overview</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Strafe FPS is a fast-paced, adrenaline-pumping zombie shooter built entirely in the Godot game engine. 
              This project showcases intense first-person combat mechanics, intelligent AI behavior, and atmospheric 
              level design. Players must navigate through zombie-infested environments, utilizing a diverse arsenal 
              of weapons and strategic movement to survive wave after wave of undead enemies. The game focuses on 
              smooth controls, responsive gunplay, and challenging enemy encounters that test both reflexes and tactical thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Video Tabs Section */}
      <section ref={sectionRef} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl mb-4 text-center">Gameplay Showcase</h2>
            <p className="text-zinc-400 text-lg text-center">Explore different aspects of the game</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {videoTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:border-cyan-500/50 hover:text-cyan-400'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Video Container */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl p-6 md:p-10 border border-zinc-800/50 shadow-2xl">
            <div className="relative">
              {/* Video Player */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
                {videoTabs.map((tab, index) => (
                  <video
                    key={index}
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={tab.videoUrl}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    loop
                    muted
                    playsInline
                  />
                ))}

                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent pointer-events-none" />

                {/* Play indicator */}
                <div className="absolute top-4 right-4 bg-red-500/90 px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-white text-xs font-medium">AUTO-PLAYING</span>
                </div>
              </div>

              {/* Tab Description */}
              <div className="mt-8">
                <h3 className="text-2xl mb-4">{videoTabs[activeTab].name}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {videoTabs[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Summary */}
      <section className="px-6 py-16 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl p-10 md:p-14 border border-zinc-800/50 shadow-2xl">
            <h2 className="text-4xl mb-8">What I Learned From This Project</h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Building Strafe FPS was an incredible learning experience that deepened my understanding of game 
                development and the Godot engine. This project challenged me to think creatively about gameplay 
                mechanics, performance optimization, and player experience design.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl text-cyan-400 mb-3">Godot Engine Mastery</h3>
                  <p className="text-zinc-400">
                    Gained hands-on experience with Godot's node system, scene management, and physics engine 
                    to create smooth FPS mechanics and responsive controls.
                  </p>
                </div>

                <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl text-cyan-400 mb-3">GDScript Programming</h3>
                  <p className="text-zinc-400">
                    Developed proficiency in GDScript, implementing game logic, player controls, weapon systems, 
                    and complex AI behaviors using object-oriented programming principles.
                  </p>
                </div>

                <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl text-cyan-400 mb-3">AI & Enemy Behavior</h3>
                  <p className="text-zinc-400">
                    Designed and implemented zombie AI with pathfinding, player detection, attack patterns, 
                    and state machines to create challenging and engaging enemy encounters.
                  </p>
                </div>

                <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl text-cyan-400 mb-3">Level Design & Atmosphere</h3>
                  <p className="text-zinc-400">
                    Learned to craft immersive 3D environments with strategic layouts, atmospheric lighting, 
                    and audio design that enhance tension and player immersion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}