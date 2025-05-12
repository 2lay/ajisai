'use client';

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export default function DevPage() {
    return (
        <div className="p-8 space-y-4">
            <Card>
                <div className="space-y-2">
                    <Button variant="primary" size="lg">Primary Button 🎨</Button>
                    <Button variant="secondary" size="lg">Secondary Button 🔲</Button>
                    <Button variant="danger" size="lg">Danger Button ⚠️</Button>
                    <Button variant="success" size="lg">Success Button ✅</Button>
                    <Button variant="outline" size="lg">Outline Button ✏️</Button>
                </div>
            </Card>

            <Card variant="outlined">
                <div className="space-y-2">
                    <Button variant="primary" size="sm">Small</Button>
                    <Button variant="primary" size="md">Medium</Button>
                    <Button variant="primary" size="lg">Large</Button>
                </div>
            </Card>
        </div>
    );
}
