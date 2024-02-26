"use client";

import {
  FiMenu,
  FiBell,
  FiMessageCircle,
  FiWind,
  FiChevronDown,
  FiChevronLeft,
  FiBriefcase,
  FiSearch,
  FiMeh,
  FiX,
} from "react-icons/fi";

import { SiPinterest } from "react-icons/si";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Badge } from "@/components/ui/badge";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Nav = () => {
  return (
    <nav className="sticky top-0 z-10 bg-background h-20 py-3 px-6 flex items-center w-screen gap-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="flex gap-2 font-semibold text-md"
              hideChevron
              elementtiming="logo"
            >
              <SiPinterest className="text-red-500 size-6" />
              Shpinterst
              <FiMenu />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col md:flex-row">
              <div className="flex w-full py-6 px-2">
                <div className="flex flex-col md:border-r-slate-300 md:border-r px-4">
                  <h3 className="font-sans font-semibold text-xl mb-4">
                    Shortcuts
                  </h3>
                  <ul className="flex flex-col">
                    <NavMenuLink>Business hub</NavMenuLink>
                    <NavMenuLink>Home feed</NavMenuLink>
                  </ul>
                </div>
              </div>
              <div className="flex w-full py-6 px-2">
                <div className="flex flex-col md:border-r-slate-300 md:border-r px-4">
                  <h3 className="font-sans font-semibold text-xl mb-4">
                    Create
                  </h3>
                  <ul className="flex flex-col">
                    <NavMenuLink>Create Pin</NavMenuLink>
                    <NavMenuLink>Create Pin for ad</NavMenuLink>
                    <NavMenuLink>Create Pin for Idea ad</NavMenuLink>
                  </ul>
                </div>
              </div>
              <div className="flex w-full py-6 px-2">
                <div className="flex flex-col md:border-r-slate-300 md:border-r px-4">
                  <h3 className="font-sans font-semibold text-xl mb-4">
                    Analytics
                  </h3>
                  <ul className="flex flex-col">
                    <NavMenuLink>Overview</NavMenuLink>
                    <NavMenuLink>Audience insights</NavMenuLink>
                    <NavMenuLink>Trends</NavMenuLink>
                  </ul>
                </div>
              </div>
              <div className="flex w-full py-6 px-2">
                <div className="flex flex-col px-4">
                  <h3 className="font-sans font-semibold text-xl mb-4">
                    Business
                  </h3>
                  <ul className="flex flex-col">
                    <NavMenuLink>
                      Business Manager{" "}
                      <Badge className="ml-4 bg-blue-500">NEW</Badge>
                    </NavMenuLink>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex h-12 gap-3 rounded-full border border-slate-200 pl-1 pr-4">
              <Avatar>
                <AvatarImage src="/lazar.jpg" />
                <AvatarFallback>LN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <p className="text-xs">Lazar Nikolov</p>
                <p className="font-semibold text-md">Lazar Nikolov</p>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col">
              <div className="min-w-96">
                <p className="px-3 py-2">
                  Business <span className="font-semibold">/ Assets</span>
                </p>
                <hr />
                <div className="flex flex-col gap-3 p-3">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      className="rounded-full w-10 h-10 p-1"
                    >
                      <FiChevronLeft />
                    </Button>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/lazar.jpg" />
                      <AvatarFallback>LN</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold flex-1">Lazar Nikolov</p>
                    <Button
                      variant="ghost"
                      className="rounded-full w-10 h-10 p-1"
                    >
                      <FiBriefcase />
                    </Button>
                  </div>
                  <Tabs defaultValue="ad-accounts">
                    <TabsList className="w-full">
                      <TabsTrigger className="flex-1" value="ad-accounts">
                        Ad accounts
                      </TabsTrigger>
                      <TabsTrigger className="flex-1" value="profiles">
                        Profiles
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="ad-accounts"
                      className="flex flex-col gap-3 items-center"
                    >
                      <div className="relative w-full">
                        <FiSearch className="absolute left-3 top-3" />
                        <input
                          placeholder="Ad account name or exact ID"
                          className="w-full border border-slate-200 p-2 pl-8 rounded-full flex gap-3 items-center"
                        />
                      </div>
                      <FiMeh className="w-32 h-32" />
                      <p>You don't have any ad accounts</p>
                      <p className="text-slate-500 text-sm text-center w-[90%]">
                        Create or request access to an ad account to promote
                        Pins and create campaigns
                      </p>
                      <Button className="mt-4 bg-red-500 hover:bg-red-600 text-white text-md w-2/3 rounded-full font-semibold">
                        Add ad account
                      </Button>
                    </TabsContent>
                    <TabsContent
                      className="flex flex-col gap-3"
                      value="profiles"
                    >
                      <div className="relative w-full">
                        <FiSearch className="absolute left-3 top-3" />
                        <input
                          placeholder="Profile name"
                          className="w-full border border-slate-200 p-2 pl-8 rounded-full flex gap-3 items-center"
                        />
                      </div>
                      <div className="flex gap-3 items-center">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src="/lazar.jpg" />
                          <AvatarFallback>LN</AvatarFallback>
                        </Avatar>
                        Lazar Nikolov
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-1 bg-slate-200 hover:bg-slate-300 rounded-full flex p-2 px-4 gap-4">
        <input
          placeholder="Search"
          className="flex-1 bg-transparent border-none"
        />
        <Button variant="ghost" className="rounded-full size-8 p-0">
          <FiX className="size-4" />
        </Button>
        <div className="w-2 border-r border-slate-300" />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            All Pins <FiChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Pins</DropdownMenuItem>
            <DropdownMenuItem>Your Pins</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button variant="ghost" className="rounded-full size-12 p-0">
          <FiBell className="size-6" />
        </Button>
        <Button variant="ghost" className="rounded-full size-12 p-0">
          <FiMessageCircle className="size-6" />
        </Button>
        <Button variant="ghost" className="rounded-full size-12 p-0">
          <FiWind className="size-6" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage src="/lazar.jpg" />
              <AvatarFallback>LN</AvatarFallback>
            </Avatar>
            <FiChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export const NavMenuLink = ({ children }) => (
  <a href="" className="min-w-64 flex rounded-md hover:bg-slate-200 py-3 px-4">
    {children}
  </a>
);
