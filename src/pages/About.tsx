import aboutImage from "@/assets/about-julia.jpg";

const About = () => {
  return (
    <main className="pt-20 min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-8">About Julia</h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-5/12">
            <img 
              src={aboutImage} 
              alt="Julia van Iersel" 
              className="w-full h-auto rounded-2xl object-cover shadow-lg aspect-[3/4]"
            />
          </div>
          
          <div className="w-full md:w-7/12 text-base leading-relaxed space-y-6">
            <p>
              I am Julia van Iersel, a creative spirit who is always open to something new. 
              My biggest drive is the reaction of the other person; I find it 
              fascinating when people project their own story or interpretation onto my paintings. 
              That is precisely when a work gains value for me.
            </p>
            <p>
              I want to challenge you to look beyond just 'beautiful' or 'not beautiful'. 
              My perspective was shaped during the orientation course at the Gerrit Rietveld Academie, 
              where I learned to look at images on different levels. I am currently studying 
              Art and Economics at the HKU (2027), combining my creative side with a 
              sharp eye for marketing.
            </p>
            <p>
              Through my experience as a content marketer at AMAZE Amsterdam and Doloris, I know how to use visuals to set an atmosphere 
              that truly touches and convinces people.
            </p>
            <p>
              I am at my best when I can translate someone's passion, character, or the atmosphere of a space 
              onto the blank canvas. Do you have an empty wall and only know which colors you 
              like? Then I see it as my challenge to capture the full character of you and your home 
              in one painting. Creating something that gives meaning to a space, that is 
              what I strive for.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
