'use client';

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "~/components/ui/navbar/page";

export default function DevPage() {
 

    return (
        <>

        <div className="p-8 space-y-8">
            <Card className="space-y-4">
                <h2 className="text-lg font-semibold">Default Buttons</h2>
                <div className="flex flex-wrap gap-4">
                    <Button color="primary" size="lg">Primary</Button>
                    <Button color="secondary" size="lg">Secondary</Button>
                    <Button color="danger" size="lg">Danger</Button>
                    <Button color="success" size="lg">Success</Button>
                    <Button color="outline" size="lg">Outline</Button>
                </div>
            </Card>

            <Card className="space-y-4">
                <h2 className="text-lg font-semibold">Flat Variant</h2>
                <div className="flex gap-4">
                    <Button color="primary" variant="flat" size="lg">Flat Button</Button>
                </div>
            </Card>

            <Card variant="outlined" className="space-y-4">
                <h2 className="text-lg font-semibold">Button Sizes</h2>
                <div className="flex items-center gap-4">
                    <Button color="primary" size="sm">Small</Button>
                    <Button color="primary" size="md">Medium</Button>
                    <Button color="primary" size="lg">Large</Button>
                </div>
            </Card>
        </div>
        </>
    );
}
