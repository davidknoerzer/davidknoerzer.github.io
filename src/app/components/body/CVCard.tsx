import { CVChapter } from "@/app/modules/CVChapter";
import Image from "next/image";

export default function CVCard({
  title,
  description,
  image,
  startDate,
  endDate,
  isCurrentOccupation,
  organization,
}: CVChapter) {
  let timeframe = null;

  function formatMonthYear(date: Date, locale = "de-CH") {
    return new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
    }).format(date);
  }

  if (startDate && endDate) {
    const start = formatMonthYear(startDate);
    const end = isCurrentOccupation ? "heute" : formatMonthYear(endDate);

    timeframe = `${start} - ${end}`;
  }

  return (
    <div className="card bg-base-300 shadow-2xl break-inside-avoid">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{organization}</p>
        <figure>
          <Image
            src={image}
            alt="cv experience organization image"
            className="p-10 bg-white rounded-2xl"
          />
        </figure>
        {description.length > 0 && (
          <ul className="list-disc p-4">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            {timeframe !== null ? timeframe : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
