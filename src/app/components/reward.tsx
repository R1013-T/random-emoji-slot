import { useEffect } from "react";
import { useReward } from "react-rewards";

export default function Reward({ currentEmoji }: { currentEmoji: string }) {
  const emojiConfig = {
    elementSize: 30,
    elementCount: 50,
    spread: 80,
    emoji: [currentEmoji],
  };

  const { reward } = useReward("rewardId", "emoji", emojiConfig);

  useEffect(() => {
    reward();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p>Congrats!!</p>
      <span id="rewardId"></span>
    </div>
  );
}
