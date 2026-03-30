import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';
import { ProjectFrontmatter } from '@/lib/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((file) => ({
    slug: file.replace('.mdx', ''),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const { frontmatter } = await compileMDX<ProjectFrontmatter>({
    source: project.content,
    options: { parseFrontmatter: true },
  });

  return {
    title: frontmatter.title || frontmatter.name,
    description: frontmatter.description,
  };
}

export default async function RealisationPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const { frontmatter, content } = await compileMDX<ProjectFrontmatter>({
    source: project.content,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="hero-padding">
      <div className="container max-w-4xl space-y-12">
        {/* Back link */}
        <Link
          href="/realisations"
          className="animated-underline text-muted-foreground inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux réalisations
        </Link>

        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-sm">
              {frontmatter.name}
            </span>
            {frontmatter.industry && (
              <>
                <span className="text-muted-foreground/50">·</span>
                <span className="text-muted-foreground text-sm">
                  {frontmatter.industry}
                </span>
              </>
            )}
            {frontmatter.date && (
              <>
                <span className="text-muted-foreground/50">·</span>
                <span className="text-muted-foreground text-sm">
                  {frontmatter.date}
                </span>
              </>
            )}
          </div>

          <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {frontmatter.title}
          </h1>

          {frontmatter.description && (
            <p className="text-muted-foreground max-w-2xl text-lg">
              {frontmatter.description}
            </p>
          )}

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Result highlight */}
          {frontmatter.result && (
            <div className="border-primary/30 bg-primary/5 rounded-lg border p-4">
              <p className="text-primary font-medium">{frontmatter.result}</p>
            </div>
          )}
        </div>

        {/* Images */}
        {frontmatter.images && frontmatter.images.length > 0 && (
          <div className="space-y-6">
            {frontmatter.images.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        )}

        {/* Process steps */}
        {frontmatter.process && frontmatter.process.length > 0 && (
          <div className="space-y-8">
            {frontmatter.process.map((step, index) => (
              <div key={index} className="space-y-3">
                <h2 className="font-display text-xl font-semibold">
                  {step.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* MDX content */}
        <div className="prose max-w-none">{content}</div>

        {/* CTA */}
        <div className="border-border space-y-4 border-t pt-8">
          <p className="text-muted-foreground">
            Un projet similaire en tête ?
          </p>
          <Button asChild>
            <Link href="/contact">Discutons de votre projet</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
