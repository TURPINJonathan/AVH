<?php

namespace App\Repository;

use App\Entity\AvhCompteRendu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AvhCompteRendu>
 *
 * @method AvhCompteRendu|null find($id, $lockMode = null, $lockVersion = null)
 * @method AvhCompteRendu|null findOneBy(array $criteria, array $orderBy = null)
 * @method AvhCompteRendu[]    findAll()
 * @method AvhCompteRendu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AvhCompteRenduRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AvhCompteRendu::class);
    }

    public function add(AvhCompteRendu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(AvhCompteRendu $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return AvhCompteRendu[] Returns an array of AvhCompteRendu objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?AvhCompteRendu
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
