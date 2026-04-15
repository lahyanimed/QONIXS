"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RouterSVG, MeshSVG, SwitchSVG, CameraSVG, LteSVG, CplSVG, AccessPointSVG } from "@/components/svg/ProductSVGs";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  router: RouterSVG,
  mesh: MeshSVG,
  switch: SwitchSVG,
  camera: CameraSVG,
  "4g": LteSVG,
  cpl: CplSVG,
  ap: AccessPointSVG,
};

interface CategoryCardProps {
  slug: string;
  name: string;
  icon: string;
  count: number;
}

export default function CategoryCard({ slug, name, icon, count }: CategoryCardProps) {
  const IconComponent = iconMap[icon] || RouterSVG;

  return (
    <Link href={`/categorie/${slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all group cursor-pointer"
      >
        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gray-50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
          <IconComponent className="w-12 h-10" />
        </div>
        <h3 className="font-syne font-bold text-sm text-dark mb-0.5">{name}</h3>
        <p className="text-xs text-gray-400 font-dm">{count} produits</p>
      </motion.div>
    </Link>
  );
}
