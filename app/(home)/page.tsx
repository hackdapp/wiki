import Link from 'next/link';
import { BookOpen, Rocket, Wrench, Newspaper, Cpu, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8 text-center bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-3xl space-y-6 pt-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-2">
          HackDApp Wiki
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          构建数字花园，记录前沿技术探索、独立开发实践与生活思考。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          <Link
            href="/docs/01-tech"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            技术探索
          </Link>
          <Link
            href="/docs/07-daily-briefs"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold transition-colors shadow-sm"
          >
            <Newspaper className="mr-2 h-5 w-5" />
            每日简报
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-left max-w-6xl mx-auto pb-16">
        <FeatureCard
          href="/docs/01-tech"
          icon={<Cpu className="h-6 w-6 text-blue-500" />}
          title="前沿技术"
          description="深入 Web3、区块链与 AI 技术架构，构建硬核知识体系。"
        />
        <FeatureCard
          href="/docs/03-indie"
          icon={<Rocket className="h-6 w-6 text-orange-500" />}
          title="独立开发"
          description="从 0 到 1 的产品构建指南，商业模式探索与实战经验。"
        />
        <FeatureCard
          href="/docs/07-daily-briefs"
          icon={<Newspaper className="h-6 w-6 text-purple-500" />}
          title="每日简报"
          description="精选每日最有价值的信息与见闻，涵盖技术、投资与工具。"
        />
        <FeatureCard
          href="/docs/05-toolbox"
          icon={<Wrench className="h-6 w-6 text-slate-500" />}
          title="工具箱"
          description="提升效率的开发工具、设计资源与实用软件推荐。"
        />
        <FeatureCard
          href="/docs/02-hardware"
          icon={<Cpu className="h-6 w-6 text-green-500" />}
          title="硬件折腾"
          description="各类硬件设备的使用心得与改造记录。"
        />
        <FeatureCard
          href="/docs/04-life"
          icon={<Heart className="h-6 w-6 text-red-500" />}
          title="生活思考"
          description="关于生活、阅读与成长的随笔记录。"
        />
      </div>
    </main>
  );
}

function FeatureCard({ href, icon, title, description }: { href: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <Link href={href} className="flex flex-col p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow hover:bg-muted/50 group">
      <div className="mb-4 p-2 w-fit rounded-lg bg-background border shadow-sm group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
