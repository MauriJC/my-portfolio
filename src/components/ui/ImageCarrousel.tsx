'use client'
import { Image as Images } from '@prisma/client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function ImageCarousel({ images }: { images: Images[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 mb-8">
            <div className="relative">
                <div className="relative w-full h-96">
                    <Image
                        src={images[currentImageIndex].path}
                        alt={`Project image ${currentImageIndex + 1}`}
                        fill
                        style={{
                            objectFit: 'contain',
                            display: 'block',
                            margin: 'auto',
                        }}
                        className="rounded-lg"
                    />
                </div>

                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    onClick={prevImage}
                >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    onClick={nextImage}
                >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
            </div>
            <div className="mt-4 flex justify-center">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 ${index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}