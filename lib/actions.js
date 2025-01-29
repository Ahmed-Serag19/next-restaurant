"use server";
import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

const badWords = [
  // English Bad Words
  "fuck",
  "shit",
  "bitch",
  "asshole",
  "bastard",
  "damn",
  "crap",
  "dumbass",
  "dick",
  "cock",
  "pussy",
  "whore",
  "slut",
  "motherfucker",
  "nigger",
  "cunt",
  "faggot",
  "retard",
  "twat",
  "jerk",
  "prick",
  "sucker",
  "wanker",
  "moron",
  "idiot",
  "loser",
  "scumbag",
  "hoe",
  "douchebag",
  "bullshit",
  "piss",
  "freak",
  "screw",
  "jackass",
  "skank",
  "tramp",
  "redneck",
  "dickhead",
  "buttface",

  // Arabic Bad Words
  "قحبة",
  "زنا",
  "ديوث",
  "كافر",
  "كلب",
  "خنزير",
  "حمار",
  "وسخ",
  "فاسق",
  "فاجر",
  "أحمق",
  "مغفل",
  "تافه",
  "حقير",
  "سافل",
  "ساقط",
  "غبي",
  "كريه",
  "نتن",
  "ملعون",
  "حثالة",
  "بغل",
  "نذل",
  "زب",
  "عرص",
  "مخنث",
  "متخلف",
  "كخة",
  "عاهر",
  "كسمك",
  "كس امك",
  "كس أمك",
  "شرموطة",
  "حيوان",
  "عرص",
  "مقرف",
  "ملعون",
  "نجس",
  "وسخ",
  "قذر",
  "حيثان",
  "كس",
  "أحة",
  "احة",
  "احه",
  "أحه",
  "قحة",
  "قحه",
  "ظوبر",
  "ظوبري",
  "ذب",
  "زبي",
  "كىىىمك",

  // Variations (Avoiding Leetspeak or Spaces)
  "f u c k",
  "s h i t",
  "b i t c h",
  "a s s",
  "d i c k",
  "w h o r e",
  "c o c k",
  "p u s s y",
  "m o r o n",
  "s k a n k",
  "t w a t",
  "ن ي ك",
  "ز ب",
  "ك س",
  "ك س م ك",
  "ك س ا م ك",
  "م غ ف ل",
  "ح ق ي ر",
  "ك س",
  "كىىىم ك",
];

function containsBadWords(text) {
  if (!text) return false;
  return badWords.some((word) => text.toLowerCase().includes(word));
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  if (
    containsBadWords(meal.title) ||
    containsBadWords(meal.summary) ||
    containsBadWords(meal.instructions) ||
    containsBadWords(meal.creator) ||
    containsBadWords(meal.creator_email)
  ) {
    return {
      message: "Your input contains inappropriate words.",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals", "page");
  redirect("/meals");
};
