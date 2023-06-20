import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Saurabh
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <a
              className="italic text-red-500"
              href="https://www.producthunt.com/products/howtoreplyto-com#howtoreplyto-com"
            >
              Award winning
            </a>{' '}
            Software Engineer with an extreme passion for crafting a delightful UI experience.
            <div>I love creating software that adds value to people, customers or myself. </div>
            Currently, I'm building ReplyBrain.com, Qlur.com, and HowToReplyTo.com
          </p>
        </div>

        <div
          data-w-id="5a2bf6b1-94b7-1195-dd8c-2451d5964b27"
          className="leading-5 text-zinc-800"
          style={{}}
        >
          <div
            data-w-id="4b9e48d4-bf21-c4ef-bfb8-e1f828eb7689"
            className="w-full mr-0 text-zinc-800"
            style={{ willChange: 'opacity', opacity: '0.90025' }}
          >
            <div
              data-w-id="d9abda31-191a-73bd-2973-efe4aca48a60"
              className="opacity-100"
              style={{ opacity: 1, willChange: 'opacity', maxWidth: 720 }}
            >
              <div className="w-full pt-2">
                <div
                  className="text-lg font-semibold leading-4 uppercase text-neutral-600"
                  style={{ letterSpacing: 3 }}
                >
                  Qlur
                </div>
                <h2
                  className="mt-3 mb-8 font-sans font-serif text-5xl font-bold tracking-tight text-red-600"
                  style={{ lineHeight: '110%' }}
                >
                  I’m currently the founder of Qlur
                </h2>
              </div>
              <div className="flex mb-16">
                <div className="flex w-px mr-8 bg-neutral-600" style={{ opacity: '0.15' }} />
                <div className="">
                  <p className="max-w-screen-sm font-sans text-xl font-normal leading-8 text-red-900 opacity-700">
                    We're building a platform that provides curated soccer news, headlines, and
                    details from world football. It also provides football news and live score feeds
                    from around the world customized to an individual's preferences.
                    <a
                      href="https://qlur.com"
                      target="_blank"
                      className="font-medium bg-transparent cursor-pointer hover:rounded hover:bg-gray-200 hover:text-slate-900 hover:opacity-100 hover:bg-opacity-[0.1] sm:font-semibold sm:text-red-600 hover,sm:text-slate-900"
                      style={{
                        transition: 'color 200ms ease 0s, background-color 200ms ease 0s',
                        textDecoration: 'underline',
                      }}
                      rel="noreferrer"
                    >
                      Learn more here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
