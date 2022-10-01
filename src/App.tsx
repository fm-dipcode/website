import { Braces } from "./components/Braces/index";
import { Logo } from "./components/Logo";
import { Spacer } from "./components/Spacer";

export function App() {
  return (
    <section class="flex flex-col justify-center items-center p-[4rem] h-full text-primary font-sans text-center select-none relative">
      <div class="absolute left-0 top-0 h-full w-full py-[4rem] px-[2rem] opacity-40 2xl:opacity-0 transition overflow-hidden">
        <Braces amount={5} type="open" centered />
      </div>

      <div class="absolute left-0 top-0 h-full w-full py-[4rem] px-[2rem] opacity-0 2xl:opacity-75 transition overflow-hidden">
        <Braces amount={5} type="open" />
      </div>

      <div class="absolute right-0 top-0 h-full w-full py-[4rem] px-[2rem] opacity-0 2xl:opacity-75 transition overflow-hidden">
        <Braces amount={5} type="close" />
      </div>

      <Logo className="h-[8rem] w-[8rem] z-10 anim-scale-fade-in" />

      <Spacer />

      <div class="flex flex-col items-center text-[2.5rem] md:text-heading font-medium z-10 anim-scale-fade-in">
        <p class="leading-none">dipCode</p>
        <p class="leading-none text-gray">a computer science collective,</p>
        <p class="leading-none text-gray">devoted to exploring</p>
        <p class="leading-none text-gray">the future via technology.</p>
      </div>

      <Spacer />

      <div class="h-[8rem] flex items-end z-10 anim-scale-fade-in">
        <a
          href="/join"
          class="block px-6 py-1.5 rounded-full border-[3px] border-gray-900 dark:border-gray-100 border-solid font-semibold hover:bg-primary-inverted text-primary hover:text-primary-inverted backdrop-blur-xl transition"
          rel="noopener noreferrer"
        >
          <span class="uppercase text-[1.5rem]">Join Us</span>
        </a>
      </div>
    </section>
  );
}
