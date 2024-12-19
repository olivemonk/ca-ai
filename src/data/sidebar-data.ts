import { Book, Cloud, Code, Home, LogOut, Phone, Settings } from "lucide-react";


export const userList = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

export const navItems = [
    { label: "Repositories", href: "/", icon: Home, isActive: true },
    { label: "AI Code Review", href: "/ai-code-review", icon: Code, isActive: false },
    { label: "Cloud Security", href: "/cloud-security", icon: Cloud, isActive: false },
    { label: "How to Use", href: "/how-to-use", icon: Book, isActive: false },
    { label: "Settings", href: "/settings", icon: Settings, isActive: false },
];

export const navSecondaryItems = [
    { label: "Support", href: "/support", icon: Phone, isActive: false },
    { label: "Logout", href: "/logout", icon: LogOut, isActive: false },
];