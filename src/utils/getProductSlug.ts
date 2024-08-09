'use client';

import { usePathname } from "next/navigation";

export function GetProductSlug() {
    const router = usePathname();

    const parts = router.split('/');
    const productIndex = parts.indexOf('product');
    const productValue = productIndex !== -1 ? parts[productIndex + 1] : null;
    
    return {
        productValue
    }
}