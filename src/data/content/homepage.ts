type HomepageContent = {
    greeting: string;
    animationText: string[];
    description: string;
}

export const homepageContent: HomepageContent = {
    greeting: "Hi, I'm Yisheng☄️",
    animationText: ["<Full Stack Developer />", "<AI Enthusiast />", "<Web3 Explorer />"],
    description: "I'm a software engineer with a curious mind of Full Stack Development🛠️, AI🤖, and Web3🪙. I'm currently doing master's in Computer Science at Johns Hopkins University in Baltimore, MD🇺🇸."
}

export function getAnimationTextsWithTagline(tagline: string): string[] {
    return ["<" + tagline + " />", ...homepageContent.animationText];
}
    
