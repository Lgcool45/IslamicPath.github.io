import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reciters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReciters, setFilteredReciters] = useState(dummy);

  useEffect(() => {
    const results = dummy.filter((reciter) =>
      reciter.reciterName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReciters(results);
  }, [searchTerm]);

  return (
    <section className="mt-12 py-12 px-8 container bg-background rounded">
      <h2 className="text-xl md:text-3xl font-bold text-green-400 mb-4">
        Find Reciters
      </h2>
      <div className="mb-6 flex flex-row items-center gap-2">
        <Input
          type="text"
          placeholder="Search for reciters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button size='icon' onClick={() => setSearchTerm("")}>
          <X className="w-6 h-6" />
        </Button>
      </div>
      <div className="space-y-8">
        {filteredReciters.length ? (
          filteredReciters.map((item) => (
            <Card key={item.reciterName} className="bg-foreground/10">
              <CardHeader>
                <CardTitle>{item.reciterName}</CardTitle>
              </CardHeader>
            </Card>
          ))
        ) : (
          <h2>No Reciters Found</h2>
        )}
      </div>
    </section>
  );
};

export default Reciters;

const dummy = [
  {
    reciterName: "Reciter 1",
  },
  {
    reciterName: "Reciter 2",
  },
  {
    reciterName: "Reciter 3",
  },
  {
    reciterName: "Reciter 4",
  },
];
