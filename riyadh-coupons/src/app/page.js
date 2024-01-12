"use client"
import Image from "next/image";
import Airtable from "airtable";
import Header from "./components/Header";
import Search from "./components/Search";
import { useEffect, useState } from "react";

export default function Home() {
  // const TOKEN_ID = "pat6ctkSNfMS5DX6L.2d64d0b226e6a1b6e2225841a1ca1466d1944387ed58c382bba66ede43c0cb98"

  // var base = new Airtable({apiKey: TOKEN_ID}).base('appcKk3YBb5YRubtz');

  // base('Discount coupon').select({
  //     // Selecting the first 3 records in Grid view:
  //     maxRecords: 3,
  //     view: "Grid view"
  // }).eachPage(function page(records, fetchNextPage) {
  //     // This function (`page`) will get called for each page of records.

  //     records.forEach(function(record) {
  //         console.log('Retrieved', record.get('Name'));
  //     });

  //     // To fetch the next page of records, call `fetchNextPage`.
  //     // If there are more records, `page` will get called again.
  //     // If there are no more records, `done` will get called.
  //     fetchNextPage();

  // }, function done(err) {
  //     if (err) { console.error(err); return; }
  // });

  const [search, setSearch] = useState("")

  return (
      <main className="max-w-[1658px] w-[85vw] mx-auto flex flex-col gap-[2svh]">
        <Header />
        <Search setSearch={setSearch} />
      </main>
  );
}
