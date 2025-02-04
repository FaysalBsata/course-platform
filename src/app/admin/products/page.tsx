import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { db } from '@/drizzle/db';
import {
  CourseProductTable,
  ProductTable as DbProductTable,
  PurchaseTable,
} from '@/drizzle/schema';
import { getUserCourseAccessGlobalTag } from '@/features/courses/db/cache/userCourseAccess';
import { getCourseSectionGlobalTag } from '@/features/courseSections/db/cache';
import { getLessonGlobalTag } from '@/features/lessons/db/cache/lessons';
import ProductTable from '@/features/products/components/ProductTable';
import { getProductGlobalTag } from '@/features/products/db/cache';
import { asc, countDistinct, eq } from 'drizzle-orm';
import { cacheTag } from 'next/dist/server/use-cache/cache-tag';
import Link from 'next/link';
export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="container my-6">
      <PageHeader title="Products">
        <Button asChild>
          <Link href="/admin/products/new">New Product</Link>
        </Button>
      </PageHeader>
      <ProductTable products={products} />
    </div>
  );
}
async function getProducts() {
  'use cache';
  cacheTag(
    getProductGlobalTag(),
    getUserCourseAccessGlobalTag(),
    getCourseSectionGlobalTag(),
    getLessonGlobalTag()
  );

  return db
    .select({
      id: DbProductTable.id,
      name: DbProductTable.name,
      status: DbProductTable.status,
      priceInDollars: DbProductTable.priceInDollars,
      description: DbProductTable.description,
      imageUrl: DbProductTable.imageUrl,
      coursesCount: countDistinct(CourseProductTable.courseId),
      customersCount: countDistinct(PurchaseTable.userId),
    })
    .from(DbProductTable)
    .leftJoin(PurchaseTable, eq(PurchaseTable.productId, DbProductTable.id))
    .leftJoin(
      CourseProductTable,
      eq(CourseProductTable.productId, DbProductTable.id)
    )
    .orderBy(asc(DbProductTable.name))
    .groupBy(DbProductTable.id);
}
