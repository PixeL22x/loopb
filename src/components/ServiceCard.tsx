import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Image from "next/image"

interface ServiceCardProps {
    title: string
    description: string
    icon: LucideIcon
    image: string
}

export function ServiceCard({ title, description, icon: Icon, image }: ServiceCardProps) {
    return (
        <Card className="transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden">
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary w-fit">
                    <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}
