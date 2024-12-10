
import { useCallback } from "react";
import { useViewTransition } from "./useViewTransiton";
import { useRouter } from "next/navigation";


export const useTransitionRouterPush = () => {
  const router = useRouter();
  const routerPush = useCallback(
    async (to: string) => {
      await router.push(to);
    },
    [router]
  );
  const { startViewTransition: routerPushWithTransition } =
    useViewTransition(routerPush);

  return { routerPushWithTransition };
};