import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Loading from "../components/Loading";

export const ReportComponent = () => {
  return (<PowerBIEmbed
    embedConfig={{
      type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
      id: "87b832fb-982f-40cd-a59e-89c93904fc54",
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=87b832fb-982f-40cd-a59e-89c93904fc54&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
      accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGUwMmZlZDYtN2Y0NS00YTgwLWFjYTUtNjU2ZGNkYjliZTVhLyIsImlhdCI6MTcxNjUzNjA1MywibmJmIjoxNzE2NTM2MDUzLCJleHAiOjE3MTY1NDA2MzUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFQdDgyVldjak15TktuY05mdGJ3a3htakJYSUhQTFFuQkN1c25adG5XazdqaUdIZEJTZlN4QnVBVTgyM29sZHZ6IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjI0MDU6MjAxOjUwMjE6ZTgzNDpiNTY5OmY0NGQ6YTU2NDplY2ZkIiwibmFtZSI6InRlc3QiLCJvaWQiOiI4MTNlMTQwYi1kMTEwLTQ2NTMtYWJhZi1lZDYyZDE1ZjE3NGIiLCJwdWlkIjoiMTAwMzIwMDM3RURGQjUyRCIsInJoIjoiMC5BVlFBMXY0Q1RrVl9nRXFzcFdWdHpibS1XZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQlVBTncuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoicnV1UGJLaHdzYTVDVkxRcXU5elYwLU42elFwVVBjeVBIYi1wellCR1ltWSIsInRpZCI6IjRlMDJmZWQ2LTdmNDUtNGE4MC1hY2E1LTY1NmRjZGI5YmU1YSIsInVuaXF1ZV9uYW1lIjoidGVzdEBhbnNodW1hbmphc3JvdGlhaG90bWFpbC5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJ0ZXN0QGFuc2h1bWFuamFzcm90aWFob3RtYWlsLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IkdSYzRiQnR5dUVxR1c2R19jUWR2QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.m5APteklSZrC4_plHYdUQAeerVLvvGBiZn7ghSyKVgOM0Jzwm6z58bQBwk_EaifTL2MXLfrPKQMasD7WC1iqf_4f681jlAkxfHGkjTkHPlhLb5TX85cB8GFfHsj7zctuqJvk-_V7T7AG7Wy4bGekC13g2dHDh-LBfLTmYfgYANDBgn93SDWl-viKCHRnCdviJjj-sE2Xl81Zu9I9MtcXlzESF2Z9bTZObiw9ozSv1WFcDyVKDn174uxUKGdn-NzqTDeuYUJszlhdwc7W2jZJEs3Cp-_thQUg5dTzlWiwJAkWAmdQMFBJzmpZaG0htenJeZU-DxLdFw5uosMqvI8ZOg",
      tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
      settings: {
        panes: {
          filters: {
            expanded: false,
            visible: false,
          },
        },
        background: models.BackgroundType.Transparent,
      },
    }}
    eventHandlers={
      new Map([
        [
          "loaded",
          function () {
            console.log("Report loaded");
          },
        ],
        [
          "rendered",
          function () {
            console.log("Report rendered");
          },
        ],
        [
          "error",
          function (event) {
            console.log(event.detail);
          },
        ],
        ["visualClicked", () => console.log("visual clicked")],
        ["pageChanged", (event) => console.log(event)],
      ])
    }
    cssClassName={"embed-container"}
    getEmbeddedComponent={(embeddedReport) => {
      window.report = embeddedReport;
    }}
  />);
};

export default withAuthenticationRequired(ReportComponent, {
  onRedirecting: () => <Loading />,
});
