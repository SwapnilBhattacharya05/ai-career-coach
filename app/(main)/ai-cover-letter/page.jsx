import React from "react";
import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CoverLetterList from "@/app/(main)/ai-cover-letter/_components/CoverLetterList";

const AICoverLettersPage = async () => {
  const coverLetters = await getCoverLetters();
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title mb-5">
          My Cover Letters
        </h1>
        <Link href="/ai-cover-letter/new">
          <Button className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </Link>
      </div>
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
};
export default AICoverLettersPage;
