import ExperienceItem from "@/components/ExperienceItem";
import ProjectItem from "@/components/ProjectItem";
import { getExperienceList, getProjectList } from "@/lib/actions";
import { Experience } from "@prisma/client";


export default async function Home() {
  const experienceList = await getExperienceList();
  const projectList = await getProjectList();
  return (
    <>
      <div>
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2></div>
          <p className="mb-4">Back when I was 10 years old, I would sit in front of my laptop, exploring new things and playing with various tools to build small video games and HTML-based websites.
            Even though I didn't always know how to do things, I always tried to dig deeper and solve the problems.
            This passion inspired my journey into coding and web development.</p>
          <p className="mb-4">In my free time, I actively pursue learning new technologies to keep my skills fresh and stay abreast of industry trends.
            I enjoy experimenting with new tools and frameworks, often engaging in personal projects to deepen my understanding and broaden my expertise.
          </p>
          <p className="mb-4">
            When I'm not at the computer, you'll often find me hiking, immersed in a good book, spending quality time with my wife, or exploring new destinations to broaden my horizons and experience different cultures.
          </p>
        </section>

        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2></div>
          <ol className="group/list">
            {experienceList.map(experience => (
              <li key={experience.id}>
                <ExperienceItem {...experience} />
              </li>
            ))}
          </ol>
        </section>

        <section id="projects">
          <ol className="group/list">
            {projectList.map(project => (
              <li key={project.id}>
                <ProjectItem {...project} />
              </li>
            ))}

          </ol>
        </section>
      </div>
    </>
  );
}
