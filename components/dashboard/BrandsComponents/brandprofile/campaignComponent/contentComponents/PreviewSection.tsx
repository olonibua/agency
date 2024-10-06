import React from "react";
import Image from "next/image";

const PreviewSection = () => {
  return (
    <div>
      <h2 className="font-bold mb-4 text-lg">Preview</h2>
      <div className="border rounded p-4">
        <div className="relative w-full aspect-w-3 aspect-h-2 mb-4">
          <Image
            src="/brandsIcons/frame4.png"
            alt="Preview"
            width={600}
            height={400}
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="flex justify-between text-xs sm:text-sm mb-2">
          <span>❤️ 5.3k</span>
          <span>👁️ 113k</span>
        </div>
        <p className="text-xs sm:text-sm mb-4">
          "Embracing the sunshine and salty air, every wave brings a new
          adventure 🌊 There's nothing like the feeling of the sand between my
          toes and the ocean breeze in my hair.#SummerGlow #LivingMyBestLife
          #OceanDreams #SunKissed"
        </p>
        <h3 className="font-semibold mb-2 text-sm">Insights</h3>
        <table className="w-full text-xs sm:text-sm">
          <tbody>
            <tr>
              <td className="py-1">Reach</td>
              <td className="text-right py-1">625K</td>
            </tr>
            <tr>
              <td className="py-1">ER</td>
              <td className="text-right py-1">40.8%</td>
            </tr>
            <tr>
              <td className="py-1">EMV</td>
              <td className="text-right py-1">$250.5K</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewSection;
