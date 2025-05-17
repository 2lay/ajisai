import Image from "next/image";
const staff = [
    {
      name: "Ellie",
      role: "Owner",
      image: "https://mc-heads.net/avatar/2lay",
      description: "Leading the team and keeping the servers running smoothly since 2022",
      color: "text-[#ff6d6d]",
    },
    {
      name: "Gamer12209",
      role: "Administrator",
      image: "https://mc-heads.net/avatar/Gamer12209",
      description: "A dedicated administrator focused on community support",
      color: "text-[#ff6d6d]",
    },
    {
      name: "Aestoris",
      role: "Administrator",
      image: "https://mc-heads.net/avatar/Aestoris",
      description: "A dedicated administrator focused on server optimization and community support",
      color: "text-[#ff6d6d]",
    },
  
  
  ];
  
export default function Staff() {
    return (
        <>
          {/* Staff Team Section */}
          <div className="mt-24 mb-16">
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
                Meet Our Staff
              </h2>
              <p className="text-lg text-white/70 mt-2 text-center">
                The team that keeps everything running smoothly
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              {staff.map((staff, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-colors duration-300 p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-neutral-700/50 border-4 border-primary-400/40 overflow-hidden hover:border-primary-400/60 transition-colors">
                    <Image
                      src={staff.image}
                      alt={`${staff.name}'s Minecraft Skin`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{staff.name}</h3>
                  <p className={`text-lg font-medium ${staff.color}`}>{staff.role}</p>
                  <p className="mt-4 text-white/70">{staff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </>
    );
}
