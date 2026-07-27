---
title: Editorial Guide
description: Editorial rules for drafting, reviewing, sourcing, and publishing knowledge base articles.
sidebar_position: 3
authors:
  - N34 editorial team
status: draft
tags:
  - editorial
  - writing
  - sources
---

# Editorial Guide

This guide defines the first editorial rules for writing and reviewing articles in the N34 Knowledge Base.

:::caution Prototype notice
This guide is part of the prototype editorial workflow. It may change as the archive process becomes more formal.
:::

## Article Statuses

Use one of these status values in article front matter:

- `draft` means the article is incomplete, unreviewed, or still being organized.
- `review` means the article is ready for human editorial and factual review.
- `published` means a human editor has approved the article for publication.

Draft material may be visible on the site, but it must be clearly marked when facts are incomplete or unverified.

## Filenames and Titles

Use lowercase, descriptive filenames with hyphens:

```text
about-this-archive.md
product-family-overview.md
source-index.md
```

Titles should be clear English phrases that match the article topic. Avoid vague titles such as "Notes" or "Draft 1".

## Dates

Use ISO-style dates when the full date is known:

```text
YYYY-MM-DD
```

If only the month or year is known, write that limitation clearly in the article text. Do not guess missing day or month values.

## People and Product Names

Use consistent names for people and products across articles. When a preferred spelling or official product name is known, use that form everywhere.

If a name has variants in source material, mention the variant in the article and cite the source where the variant appears.

## Uncertain Claims

Mark uncertain claims explicitly. Use phrases such as:

- `Needs source`
- `Date not yet verified`
- `Name spelling not yet confirmed`
- `Interpretation, not confirmed by source`

Do not present uncertain material as fact.

## Sources

List sources in a `Sources` section at the end of each article. Each source entry should include enough information for another editor to find and evaluate it.

When adding a new source record, use `templates/source-note-template.md` and connect it to [Sources and Archives](../sources/index.md).

## Images

Record image provenance before publishing an image. At minimum, note where the image came from, who owns or supplied it, and whether it is approved for public use.

Every image must have useful alt text that describes the content or purpose of the image. Decorative images should be avoided unless they support the article.

## AI-Assisted Drafting

AI-generated text may be used for transcription cleanup, organization, translation, summarization, and editing suggestions.

AI-generated text must be reviewed by a human before publication. Human reviewers are responsible for factual accuracy, tone, source quality, and final approval.

## Related Pages

- [About This Archive](./about-this-archive.md)
- [Sources and Archives](../sources/index.md)
