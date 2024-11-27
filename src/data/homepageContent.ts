type HomepageContent = {
    greeting: string;
    animationText: string[];
    description: string;
}

export const homepageContent: HomepageContent = {
    greeting: "Hi, I'm Ethan",
    animationText: ["< Developer />", "< Social Observer />", "< Student />"],
    description: "I'm a software engineer with a curious mind of technology. I'm currently a master's student in Computer Science at Johns Hopkins University in Baltimore 🇺🇸."
}

export function getAnimationTextsWithTagline(tagline: string): string[] {
    return ["< " + tagline + " />", ...homepageContent.animationText];
}
    
