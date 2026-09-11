import { nextTick, onMounted, onBeforeUnmount } from "vue";

export function usePrintAndClose() {
  const handleAfterPrint = () => {
    window.close();
  };

  onMounted(async () => {
    window.addEventListener("afterprint", handleAfterPrint);

    await nextTick();

    if (document.readyState !== "complete") {
      await new Promise<void>((resolve) => {
        window.addEventListener("load", () => resolve(), { once: true });
      });
    }

    await new Promise(requestAnimationFrame);

    window.print();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("afterprint", handleAfterPrint);
  });
}
