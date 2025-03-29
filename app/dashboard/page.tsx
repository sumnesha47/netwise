import { Header } from "@/app/dashboard/_components/Header";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { HelloWorld } from "@/registry/new-york/hello-world/hello-world";
import React from "react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3 w-full">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center gap-2 justify-between w-full">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <ModeToggle />
            </div>
          </div>
        </header>
        <div className="w-full mx-auto flex flex-col min-h-svh px-8 py-8 gap-8">
          <Header
            title="Hello world"
            description="A simple hello world component."
          />
          <main className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center justify-between">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A simple hello world component
                </h2>
                <OpenInV0Button name="hello-world" className="w-fit" />
              </div>
              <div className="flex items-center justify-center min-h-[400px] relative">
                <HelloWorld />
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
