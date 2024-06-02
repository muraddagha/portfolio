import prisma from "./prisma"

export const getExperienceList = async () => {
    const data = await prisma.experience.findMany({
        include: {
            techStacks: {
                select: {
                    techStack: true
                }
            },
            workedProjects: true
        },
        orderBy: {
            order: 'asc'
        }
    });
    return data;
}

export const getProjectList = async () => {
    const data = await prisma.project.findMany({
        include: {
            techStacks: {
                select: {
                    techStack: true
                }
            },
        },
        orderBy: {
            order: 'asc'
        }
    });
    return data;
}