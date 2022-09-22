import clsx from "clsx";
import { Brace } from "../Brace/index";
import styles from "./index.module.css";

export function Braces({
  amount,
  type,
  centered,
}: {
  amount: number;
  type: "open" | "close";
  centered?: boolean;
}) {
  if (centered) {
    return (
      <div class="h-full z-0 flex items-center justify-center blur-lg">
        <div class="relative left-[-60%] h-full translate-x-[50%]">
          {Array.from({ length: amount }).map((_, index) => (
            <div
              className="absolute top-0 bottom-0 h-[100%-4rem]"
              style={{
                transform: `translateX(${index * 2}rem)`,
              }}
            >
              <Brace staggerIndex={index} type={type} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div class="relative h-full z-0">
      {Array.from({ length: amount }).map((_, index) => (
        <div
          className={clsx(
            "absolute top-0 bottom-0 h-[100%-4rem]",
            type === "open"
              ? styles["anim-stagger-to-right"]
              : styles["anim-stagger-to-left"]
          )}
          style={{
            "--xbase": `${index * (type === "open" ? 2 : -2)}rem`,
            "--stagger-index": index,
            left: type === "open" ? 0 : "auto",
            right: type === "close" ? 0 : "auto",
            animationDelay: `${index * 0.05}s`,
          }}
        >
          <Brace staggerIndex={index} type={type} />
        </div>
      ))}
    </div>
  );
}
